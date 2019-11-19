
# in spec/features/enter_names_spec.rb

feature 'Enter names' do
  scenario 'submitting names' do
    visit('/')
    fill_in :player_1_name, with: 'Bob'
    fill_in :player_2_name, with: 'Marley'
    click_button 'Submit'
    expect(page).to have_content 'Bob vs. Marley'
  end
end
