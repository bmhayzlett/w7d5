
json.partial! 'api/guests/guest', guest: @guest
  # name: @guest.name,
  # age: @guest.age,
  # favorite_color: @guest.favorite_color

json.gifts(@guest.gifts, :title, :description)

  # json.array! @guest.gifts do |gift|
  #   json.title gift.title
  #   json.description gift.description
  # end
