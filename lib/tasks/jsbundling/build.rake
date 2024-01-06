namespace :javascript do
  desc "Builds the javascript bundle"
  task :build do
    puts "Building javascript bundle"
    `npm run build`
  end
end

Rake::Task["assets:precompile"].enhance ["javascript:build"]

namespace :css do
  desc "Builds the css bundle"
  task :build do
    puts "Building css bundle"
    `npm run build:css`
  end
end

namespace :assets do
  desc "Builds the javascript and css bundles"
  task :build do
    Rake::Task["javascript:build"].invoke
    Rake::Task["css:build"].invoke
  end
end