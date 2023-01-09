const { Model } = require('objection');
const knex = require('../db/KnexConnection')

Model.knex(knex)

class User_Profile extends Model {
  static get tableName() {
    return 'User_Profile';
  }


  static get idColumn() {
    return 'user_id';
  }
 
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        user_id: { type: 'integer' },
    
      },
    };
  }


  static get relationMappings() {
      const Tenant = require('../Models/Tenant_Profile')
      return {
          writer: {
              relation: Model.BelongsToOneRelation,
              modelClass: Tenant ,
              join: {
                  from: 'User_Profile.user_id',
                  to: 'Tenant_Profile.tenant_id'
              }
          }
      }
  }
}

module.exports = User_Profile;