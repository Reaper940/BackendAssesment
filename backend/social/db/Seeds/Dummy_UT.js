exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('User_Profile').del()
  await knex('User_Profile').insert([
    {user_id: 1, 
      first_name: 'Hamza',
      last_name:'Butt',
      department:'Cleaning',
      designation:'Cleaning Head',
      tenant_id:1,
       image_url:'www.facebookpic.com',
       city:'Lahore',
       country:'Pakistan',
       bio:'IAmHamza',
       social_links:'www.hamzahilal.com',
       employee_id:325 },
       
       
       {user_id: 2, 
        first_name: 'Faizan',
        last_name:'Butt',
        department:'Cane',
        designation:'Cane Head',
        tenant_id:1,
         image_url:'www.faizanbuttlegend.com',
         city:'Lahore',
         country:'Pakistan',
         bio:'IAmFaizan',
         social_links:'www.faizanqadri.com',
         employee_id:124 }
  ]);//.onConflict('id').ignore();
};
