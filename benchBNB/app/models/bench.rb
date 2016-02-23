# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  lat         :float            not null
#  lon         :float            not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ActiveRecord::Base

  def self.in_bounds(bounds)

    debugger

    min_lat = bounds[:southWest][:lat]
    max_lat = bounds[:northEast][:lat]
    min_lon = bounds[:southWest][:lon]
    max_lon = bounds[:northEast][:lon]

    benches = Bench.where( "lat < #{max_lat} and lat > #{min_lat}
                            and lon < #{max_lon} and lon > #{min_lon}")
    return benches

  end

end
