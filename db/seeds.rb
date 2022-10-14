User.all.destroy_all
Puzzle.all.destroy_all
Clue.all.destroy_all
AttemptedPuzzle.all.destroy_all

10.times do
User.create!(name: Faker::Name.name, password_digest: 12345, image: nil, email: nil)

end

10.times do
    Puzzle.create!(user_id: User.all.sample.id, solution: 'abcde', difficulty: rand(1..3))
end

30.times do
    Clue.create!(puzzle_id: Puzzle.all.sample.id, text: 'this is a fake clue')
end

20.times do
    AttemptedPuzzle.create!(user_id: User.all.sample.id, puzzle_id: Puzzle.all.sample.id, solved?: false)
end