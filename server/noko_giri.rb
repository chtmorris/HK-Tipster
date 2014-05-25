require 'rubygems'
require 'nokogiri'
require 'open-uri'

url = "http://racing.hkjc.com/racing/Info/meeting/Results/english/Local/"
doc = Nokogiri::HTML(open(url))
puts doc.css("#results").text
