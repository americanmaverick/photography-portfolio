require 'securerandom'

def photos
  Dir.glob('./docs/photos/orig/*.JPG').map do |path|
    Pathname(path).basename
  end
end

def cache_buster
  "#{Time.new.strftime('%F')}-#{SecureRandom.hex(3)}"
end

