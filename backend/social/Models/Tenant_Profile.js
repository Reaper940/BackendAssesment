const { Model } = require('objection');
const knex = require('../db/KnexConnection')

Model.knex(knex)

// Use Objection models to validate data sources
// currently you are using no validation at this step.
// make sure you write what datatype should be accepted by each model per field.

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