const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minLength: 8
  },
  role: {
    type: String,
    trim: true,
    required: true,
    enum: ['user', 'admin', 'superadmin']
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Companies'
  },
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Projects'
  }]
}, {
  timestamps: true
})

module.exports = model('Users', userSchema)
