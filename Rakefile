require 'rubygems'
require 'bundler/setup'

desc "Create a new post"
task :new_post, :title do |t, args|
  require 'stringex'

  title = args[:title]

  raise "Title required" unless title

  url = title.to_url

  time = Time.now
  
  filename = "#{time.strftime("%Y-%m-%d")}-#{url}.markdown"

  puts "Creating file: #{filename}"

  content = <<-EOF
---
layout: post
title: #{title}
published: false
date: #{time.strftime("%Y-%m-%dT%TZ")}
signature: Sam Mulube
---
EOF

  File.open(File.dirname(__FILE__) + "/_posts/#{filename}", "w") do |f|
    f.write(content)
  end
end
