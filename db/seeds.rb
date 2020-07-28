# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

[
  ['Knitting for Dogs', 'margarida-afonso-ahMCpXdUjv0-unsplash.jpg'],
  ['Living a Purpose Life', 'jamie-street-_94HLr_QXo8-unsplash.jpg'],
  ['Entrepreneurship for Llamas', 'garrhet-sampson-CmF_5GYc6c0-unsplash.jpg'],
  ['No-nonsense Cat Napping', 'lauren-kay-wUMfrBfNNq0-unsplash.jpg'],
  ['Healthy Eating for Koalas', 'sara-cervera-cjiJUfFCoUs-unsplash.jpg']
].each do |data|
  course = Course.create(
    name: data[0],
    status: :published,
    image_url: "https://s3.amazonaws.com/assets.dreamseedo.org/challenge/#{data[1]}"
  )
  1.upto(3).each do |i|
    course.steps.create(
      name: "Step #{i}",
      order: i - 1
    )
  end
end
