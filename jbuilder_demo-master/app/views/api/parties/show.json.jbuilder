json.partial! 'api/parties/party', party: @party

json.guests do
  json.array! @party.guests, :name do |guest|
    json.partial! 'api/guests/guest', guest: guest
    json.gifts(guest.gifts, :title, :description)
    @gifts.each do |gift|
      json.partial! 'api/gifts/gift', gift: gift if gift.guest_id == guest.id
    end
  end
end
