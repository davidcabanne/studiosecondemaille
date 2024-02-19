require 'liquid'

class CustomFileSystem < Liquid::BlankFileSystem
  def initialize(root_path)
    @root_path = root_path
  end

  def read_template_file(template_path, context)
    # Modify the path to point to the snippets directory if needed
    full_path = if template_path.start_with?('snippets/')
                  File.join(@root_path, "#{template_path}.liquid")
                else
                  File.join(@root_path, "snippets", "_#{template_path}.liquid")
                end

    # Read and return the contents of the template file
    File.read(full_path)
  rescue Errno::ENOENT
    raise Liquid::FileSystemError, "No such template '#{template_path}'"
  end
end
