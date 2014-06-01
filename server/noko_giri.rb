require 'rubygems'
require 'nokogiri'
require 'open-uri'


# url = "http://racing.hkjc.com/racing/Info/Meeting/Results/English/Local/20140525/ST/1"
# url = "http://racing.hkjc.com/racing/Info/Meeting/Results/English/Local/20140525/ST/2"
# url = "http://racing.hkjc.com/racing/Info/Meeting/Results/English/Local/20140525/ST/3"
# url = "http://racing.hkjc.com/racing/Info/Meeting/Results/English/Local/20140525/ST/4"
# url = "http://racing.hkjc.com/racing/Info/Meeting/Results/English/Local/20140525/ST/5"
# url = "http://racing.hkjc.com/racing/Info/Meeting/Results/English/Local/20140525/ST/6"
# url = "http://racing.hkjc.com/racing/Info/Meeting/Results/English/Local/20140525/ST/7"
# url = "http://racing.hkjc.com/racing/Info/Meeting/Results/English/Local/20140525/ST/8"

# url = "http://racing.hkjc.com/racing/Info/Meeting/Results/English/Local/20140521/HV/1"
url = "http://racing.hkjc.com/racing/Info/Meeting/Results/English/Local/20140521/HV/2"

TIERCE_REGEX          = /TIERCE((\d*\.?)\,?(\d*\.?)\,?(\d*\.?)\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?)/
TRIO_REGEX            = /TRIO((\d*\.?)\,?(\d*\.?)\,?(\d*\.?)\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?\d*\.?\,?)/
DIVIDENDS_REGEX = /(\d*,?\d?\d?\d?.\d\d)(\d*,?\d?\d?\d?.\d\d)(\d*,?\d?\d?\d?.\d\d)(\d*,?\d?\d?\d?.\d\d)(\d*,?\d?\d?\d?.\d\d)(\d*,?\d?\d?\d?.\d\d)(\d*,?\d?\d?\d?.\d\d)(\d*,?\d?\d?\d?.\d\d)(\d*,?\d?\d?\d?.\d\d)(\d*,?\d?\d?\d?.\d\d)(\d*,?\d?\d?\d?.\d\d)(\d*,?\d?\d?\d?.\d\d)/


def parse_results(url)
  doc = Nokogiri::HTML(open(url))

  #FIND WINNING HORSES
  results = doc.css('td .fontStyle').text


  tierce = TIERCE_REGEX.match(results.to_s)
  trio = TRIO_REGEX.match(results.to_s)

  first_horse = 0
  second_horse = 0
  third_horse = 0

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

  #FIND DIVIDENDS
  dividends_raw = doc.css('.number14.tdAlignR').text
  puts dividends_raw


  dividend = DIVIDENDS_REGEX.match(dividends_raw.to_s)

  first_dividend        = dividend[1]
  second_dividend       = dividend[2]
  third_dividend        = dividend[3]
  fourth_dividend       = dividend[4]
  fifth_dividend        = dividend[5]
  sixth_dividend        = dividend[6]
  seventh_dividend      = dividend[7]
  eighth_dividend       = dividend[8]
  ninth_dividend        = dividend[9]
  tenth_dividend        = dividend[10]
  eleventh_dividend     = dividend[11]
  twelth_dividend       = dividend[12]
  thirteenth_dividend   = dividend[13]
  fourteen_dividend     = dividend[14]
  fifteenth_dividend    = dividend[15]
  sixteenth_dividend    = dividend[16]
  seventeenth_dividend  = dividend[17]

  puts first_dividend
  puts second_dividend
  puts third_dividend
  puts fourth_dividend
  puts fifth_dividend
  puts sixth_dividend
  puts seventh_dividend
  puts eighth_dividend
  puts ninth_dividend
  puts tenth_dividend
  puts eleventh_dividend
  puts twelth_dividend
  puts thirteenth_dividend
  puts fourteen_dividend
  puts fifteenth_dividend
  puts sixteenth_dividend
  puts seventeenth_dividend

  #MATCH WINNING COMBO WITH DIVIDEND

  data = {

      :WIN              => {
                             :win_combo => [first_horse],
                             :dividend => first_dividend
                           },

      :PLACE            => [
                           {
                             :win_combo => [first_horse],
                             :dividend => second_dividend
                           },
                           {
                             :win_combo => [second_horse],
                             :dividend => third_dividend
                           },
                           {
                             :win_combo => [third_horse],
                             :dividend => fourth_dividend
                           }
                           ],

      :QUENILLA         => {
                             :win_combo => [first_horse, second_horse],
                             :dividend => fifth_dividend
                           },

      :QUENILLA_PLACE   => [
                           {
                             :win_combo => [first_horse, second_horse],
                             :dividend => sixth_dividend
                           },
                           {
                             :win_combo => [first_horse, third_horse],
                             :dividend => seventh_dividend
                           },
                           {
                             :win_combo => [second_horse, third_horse],
                             :dividend => eighth_dividend
                           }
                           ],

      :TIERCE           => {
                             :win_combo => [first_horse, second_horse, third_horse],
                             :dividend  => ninth_dividend
                           },
      :TRIO             => {
                             :win_combo => [first_horse, second_horse, third_horse],
                             :dividend  => tenth_dividend
                           }
    }

  puts data
end

parse_results("http://racing.hkjc.com/racing/Info/Meeting/Results/English/Local/20140521/HV/2")
