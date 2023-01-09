const { Model } = require('objection');
const knex = require('../db/KnexConnection')

Model.knex(knex)

class Tenant extends Model {
  static get tableName() {
    return 'Tenant_Profile';
  }

  static get idColumn() {
    return 'tenant_id';
  }
  
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        tenant_id: { type: 'integer' },
      },
    };
  }



  static get relationMappings() {
      const  User_Profile= require('../Models/User_Profile')
      return {
          writer: {
              relation: Model.HasManyRelation,
              modelClass: User_Profile,
              join: {
                  from: 'Tenant_Profile.tenant_id',
                  to: 'User_Profile.user_id'
              }
          }
      }
  }
}

module.exports = Tenant;