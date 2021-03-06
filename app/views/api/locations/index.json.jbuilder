@locations.each do |location|
    json.set! location.id do 
        json.name location.name
        json.lat location.lat
        json.long location.long
        json.num_spots location.spots.length
        json.photo_url url_for(location.photo) 
    end
end

