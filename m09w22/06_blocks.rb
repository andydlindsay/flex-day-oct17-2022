# # block is denoted with do..end
# # a block in memory is known as a Proc(edure)

# names = ['alice', 'bob', 'carol']

# names.each do |name|
#   puts "hello there #{name}"
# end

# puts

# my_block = Proc.new do |name|
#   puts "hello there #{name} from the stored procedure"
# end

# names.each &my_block

# puts

# ['a', 'e', 'i', 'o', 'u'].each &my_block

my_stored_procedure = Proc.new do |num| 
  puts "hello there #{num}"
end

def accepting_block
  # start time
  yield(42)
  # end time
  # puts end time - start time
end

accepting_block &my_stored_procedure
