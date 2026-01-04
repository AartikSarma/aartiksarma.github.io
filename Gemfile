source "https://rubygems.org"

# Use GitHub Pages gem which includes compatible versions
gem "github-pages", group: :jekyll_plugins

# Webrick needed for Ruby 3.0+
gem "webrick", "~> 1.9"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:windows]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
