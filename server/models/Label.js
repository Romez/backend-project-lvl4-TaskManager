import objection from 'objection';

const { Model } = objection;

export default class Label extends Model {
  static get tableName() {
    return 'labels';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1 },
      },
    };
  }
}
