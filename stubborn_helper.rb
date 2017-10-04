def photos
  Dir.glob('./site/photos/orig/*.JPG').map do |path|
    Pathname(path).basename
  end
end

