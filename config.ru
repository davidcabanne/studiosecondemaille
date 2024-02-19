require 'dugway'
require 'json'
require 'liquid'
require_relative 'custom_file_system' # This is the correct relative path

begin
  file = File.read('.dugway.json')
  json = JSON.parse(file)
  options = HashWithIndifferentAccess.new(json)
rescue Exception => e
  puts "Error reading Dugway configuration: #{e}"
  options = {}
end

# Assuming your Liquid templates are in the 'source' directory, including snippets
Liquid::Template.file_system = CustomFileSystem.new(File.join(Dir.pwd, 'source'))

# The rest of your config.ru file should run the Dugway app
run Dugway.application(options)
