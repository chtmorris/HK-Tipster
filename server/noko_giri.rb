require 'rubygems'
require 'nokogiri'
require 'open-uri'

#doesn't  works
url = "http://racing.hkjc.com/racing/Info/Meeting/Results/English/Local/20140525/ST/8"
# url = "http://racing.hkjc.com/racing/Info/Meeting/Results/English/Local/20140525/ST/1"

#work
# url = "http://racing.hkjc.com/racing/Info/Meeting/Results/English/Local/20140525/ST/2"
# url = "http://racing.hkjc.com/racing/Info/Meeting/Results/English/Local/20140525/ST/3"

doc = Nokogiri::HTML(open(url))
results = doc.css('td .fontStyle').text
# puts doc.css('td .fontStyle').text

TIERCE_REGEX          = /TIERCE((\d*\.?)\,?(\d*\.?)\,?(\d*\.?)\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?)/
# QUINELLA_PLACE_REGEX  = /QUINELLA PLACE(\d*\.?\,?\d*\.?\,?(\d*\.?)\,?(\d*\.?\,?)\d*\.?\,?(\d*\.?\,?)\d*\.?\,?)/
TRIO_REGEX            = /TRIO((\d*\.?)\,?(\d*\.?)\,?(\d*\.?)\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?)/

tierce = TIERCE_REGEX.match(results.to_s)
# quinella_place = QUINELLA_PLACE_REGEX.match(results.to_s)
trio = TRIO_REGEX.match(results.to_s)

first_horse = 0
second_horse = 0
third_horse = 0

puts tierce
puts trio

first_horse = tierce[2]
second_horse = tierce[3]

trio_array = []
trio_third_horse = [trio[4][0],trio[4][1]].join
trio_array.push(trio[2], trio[3], trio_third_horse)

tierce_third_horse = [tierce[4][0],tierce[4][1]].join

trio_array.each do |horse|
  if horse == tierce_third_horse
    third_horse = horse
    break
  else
    third_horse = tierce[4][0]
  end
end

puts first_horse
puts second_horse
puts third_horse




#   if horse == trio_third_horse
#     third_horse == trio_third_horse
#   else
#     third_horse == trio[4][0]
#   end
# end

# puts third_horse

# first_place_horse = tierce[1].match(/\d*/)
# second_place_horse = tierce[1].match(/,(\d*)/)
# second_place_horse = second_place_horse[1]

# # THIRD PLACE CHECK -
# # 1) CHECK QP NUMBERS AFTER SECOND AND THIRD COMMA.  IF THEY ARE EQUAL, THEN ASSUME THIRD PLACE IS A TWO DIGIT HORSE.  ELSE SINGLE DIGIT
# first_comma = []
# first_comma.push(quinella_place[2][0])
# first_comma.push(quinella_place[2][1])

# second_comma = []
# second_comma.push(quinella_place[3][0])
# second_comma.push(quinella_place[3][1])

# if first_comma == second_comma
#   third_place_horse = [quinella_place[3][0],quinella_place[3][1]].join.to_i
# else
#   third_place_horse = quinella_place[3][0]
# end

# # PRINT WINNERS
# puts first_place_horse
# puts second_place_horse
# puts third_place_horse



# WIN_REGEX             = /WIN(\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?)/
# PLACE_REGEX           = /PLACE(\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?)/
# QUINELLA_REGEX        = /QUINELLA(\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?)/
# FIRST_4_REGEX         = /FIRST 4(\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?)/
# 1ST_DOUBLE_REGEX      = /1ST DOUBLE(\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?)/

# win   = WIN_REGEX.match(results.to_s)
# place = PLACE_REGEX.match(results.to_s)
# quinella = QUINELLA_REGEX.match(results.to_s)
# first_4 = FIRST_4_REGEX.match(results.to_s)

# puts win
# puts place
# puts quinella
# puts first_4





# array = tierce[1].scan(/\d*,?/)

# puts array[0]

# tierce[1].split("").each do |i|
#   puts i
# end



# Trying to find horses that came in first second and third
# Look at tierce





