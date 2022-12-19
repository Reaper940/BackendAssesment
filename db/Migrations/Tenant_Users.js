
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Tenant_Profile', t => {
        t.increments('tenant_id')
        t.string('tenant_name')
        t.string('Address')
        t.string('city')
        t.string('state')
        t.string('country')
        t.string('zip_code')
        t.string('phone')
        t.string('web_url')
    })
    .createTable('User_Profile', t => {
        t.increments('user_id')
        t.string('first_name')
        t.string('last_name')
        t.string('department')
        t.string('designation')
        t.integer('tenant_id').references('tenant_id').inTable('Tenant_Profile')
        t.string('image_url')
        t.string('city')
        t.string('country')
        t.string('bio')
        t.string('social_links')
        t.integer('employee_id')
    })
  };

  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('User_Profile').dropTableIfExists('Tenant_Profile')
   
  };
  