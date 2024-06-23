import React, { useState, useEffect, useCallback } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Simple PCA implementation
function simplePCA(data, numComponents = 2) {
  const mean = data[0].map((_, i) => data.reduce((sum, row) => sum + row[i], 0) / data.length);
  const centeredData = data.map(row => row.map((val, i) => val - mean[i]));
  const covMatrix = centeredData[0].map((_, i) => 
    centeredData[0].map((_, j) => 
      centeredData.reduce((sum, row) => sum + row[i] * row[j], 0) / (data.length - 1)
    )
  );
  
  // Simple power iteration method for first two principal components
  const getEigenvector = (matrix) => {
    let vec = matrix[0].map(() => Math.random());
    for (let i = 0; i < 100; i++) {
      vec = matrix.map(row => row.reduce((sum, val, i) => sum + val * vec[i], 0));
      const magnitude = Math.sqrt(vec.reduce((sum, val) => sum + val * val, 0));
      vec = vec.map(val => val / magnitude);
    }
    return vec;
  };

  const pc1 = getEigenvector(covMatrix);
  const pc2 = getEigenvector(covMatrix.map(row => row.map((val, i) => val - pc1[i] * pc1.reduce((sum, v, j) => sum + v * row[j], 0))));

  return centeredData.map(row => [
    row.reduce((sum, val, i) => sum + val * pc1[i], 0),
    row.reduce((sum, val, i) => sum + val * pc2[i], 0)
  ]);
}

const BiomarkerSimulation = () => {
  const [numBiomarkers, setNumBiomarkers] = useState(5);
  const [numSamplesPerGroup, setNumSamplesPerGroup] = useState(30);
  const [betaAlpha, setBetaAlpha] = useState(2);
  const [betaBeta, setBetaBeta] = useState(2);
  const [pcaResultsTrue, setPcaResultsTrue] = useState(null);
  const [pcaResultsDiluted, setPcaResultsDiluted] = useState(null);

  const runSimulation = useCallback(() => {
    const trueConcentrations = Array(numBiomarkers).fill().map(() => Math.random() * 100);
    let group1TrueData = [];
    let group2TrueData = [];
    let group1DilutedData = [];
    let group2DilutedData = [];

    for (let i = 0; i < numSamplesPerGroup; i++) {
      const dilutionFactor = betaDistribution(betaAlpha, betaBeta);
      const sample1True = trueConcentrations.map(c => c * (1 + Math.random() * 0.1));
      const sample2True = trueConcentrations.map(c => c * (1 + Math.random() * 0.1) * (1 + Math.random()));
      const sample1Diluted = sample1True.map(c => c * dilutionFactor);
      const sample2Diluted = sample2True.map(c => c * dilutionFactor);

      group1TrueData.push(sample1True);
      group2TrueData.push(sample2True);
      group1DilutedData.push(sample1Diluted);
      group2DilutedData.push(sample2Diluted);
    }

    // Perform PCA
    const pcaDataTrue = [...group1TrueData, ...group2TrueData];
    const pcaDataDiluted = [...group1DilutedData, ...group2DilutedData];
    const pcaResultsTrue = simplePCA(pcaDataTrue);
    const pcaResultsDiluted = simplePCA(pcaDataDiluted);

    // Prepare PCA results for visualization
    const preparePcaForViz = (pcaResults, group1Length, group2Length) => {
      const group1 = pcaResults.slice(0, group1Length).map((point, i) => ({ x: point[0], y: point[1], group: 'Group 1', index: i }));
      const group2 = pcaResults.slice(group1Length).map((point, i) => ({ x: point[0], y: point[1], group: 'Group 2', index: i }));
      const centroid1 = calculateCentroid(group1);
      const centroid2 = calculateCentroid(group2);
      return { group1, group2, centroid1, centroid2 };
    };

    setPcaResultsTrue(preparePcaForViz(pcaResultsTrue, numSamplesPerGroup, numSamplesPerGroup));
    setPcaResultsDiluted(preparePcaForViz(pcaResultsDiluted, numSamplesPerGroup, numSamplesPerGroup));
  }, [numBiomarkers, numSamplesPerGroup, betaAlpha, betaBeta]);

  useEffect(() => {
    const debounceTimer = setTimeout(runSimulation, 300);
    return () => clearTimeout(debounceTimer);
  }, [runSimulation]);

  const betaDistribution = (alpha, beta) => {
    const u = Math.random();
    const v = Math.random();
    const x = Math.pow(u, 1/alpha);
    const y = Math.pow(v, 1/beta);
    return x / (x + y);
  };

  const calculateCentroid = (points) => {
    const sum = points.reduce((acc, point) => ({ x: acc.x + point.x, y: acc.y + point.y }), { x: 0, y: 0 });
    return { x: sum.x / points.length, y: sum.y / points.length };
  };

  const renderPCAPlot = (pcaResults, title) => (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {pcaResults && (
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="PC1" />
              <YAxis type="number" dataKey="y" name="PC2" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="Group 1" data={pcaResults.group1} fill="#8884d8" />
              <Scatter name="Group 2" data={pcaResults.group2} fill="#82ca9d" />
              <Scatter name="Centroid 1" data={[pcaResults.centroid1]} fill="#8884d8" shape="star" size={100} />
              <Scatter name="Centroid 2" data={[pcaResults.centroid2]} fill="#82ca9d" shape="star" size={100} />
            </ScatterChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Biomarker PCA Simulation</h1>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <Card>
          <CardHeader>
            <CardTitle>Simulation Parameters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <label className="block mb-2">Number of Biomarkers: {numBiomarkers}</label>
              <Slider
                value={[numBiomarkers]}
                onValueChange={(value) => setNumBiomarkers(value[0])}
                min={1}
                max={20}
                step={1}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Samples per Group: {numSamplesPerGroup}</label>
              <Slider
                value={[numSamplesPerGroup]}
                onValueChange={(value) => setNumSamplesPerGroup(value[0])}
                min={10}
                max={100}
                step={1}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Beta Distribution α: {betaAlpha.toFixed(1)}</label>
              <Slider
                value={[betaAlpha]}
                onValueChange={(value) => setBetaAlpha(value[0])}
                min={0.1}
                max={10}
                step={0.1}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Beta Distribution β: {betaBeta.toFixed(1)}</label>
              <Slider
                value={[betaBeta]}
                onValueChange={(value) => setBetaBeta(value[0])}
                min={0.1}
                max={10}
                step={0.1}
              />
            </div>
          </CardContent>
        </Card>
        {renderPCAPlot(pcaResultsTrue, "PCA of True Biomarker Values")}
        {renderPCAPlot(pcaResultsDiluted, "PCA of Diluted Biomarker Values")}
      </div>
    </div>
  );
};

export default BiomarkerSimulation;
