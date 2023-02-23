exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Tenant_Profile').del()
  await knex('Tenant_Profile').insert([
    {tenant_id: 1,
      tenant_name: 'Saad',
      Address:'NewIqbalPark',
      city:'Lahore',
      state:'Punjab',
      country:'Pakistan',
      zip_code:'54000',
      phone:'03355797878',
      web_url:'www.saadbutt.com'},

      {tenant_id: 2,
        tenant_name: 'Osama',
        Address:'NewIqbalPark',
        city:'Lahore',
        state:'Punjab',
        country:'Pakistan',
        zip_code:'54000',
        phone:'03234233456',
        web_url:'www.osambutt.com'}
  ]);//.onconflict('id').ignore();

  
};


  