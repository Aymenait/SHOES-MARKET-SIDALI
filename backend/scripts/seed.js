const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Wilaya = require('../models/Wilaya');
const Commune = require('../models/Commune');
const db = require('../config/db');

const seedDatabase = async () => {
  try {
    await db();

    await Wilaya.deleteMany({});
    await Commune.deleteMany({});

    const filePath = path.join(__dirname, '../../temp_algeria_cities/json/algeria_cities.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const wilayas = {};

    for (const item of data) {
      if (!wilayas[item.wilaya_code]) {
        const newWilaya = new Wilaya({
          name: item.wilaya_name_ascii,
          name_ar: item.wilaya_name,
          code: item.wilaya_code,
        });
        const savedWilaya = await newWilaya.save();
        wilayas[item.wilaya_code] = savedWilaya._id;
      }

      const newCommune = new Commune({
        name: item.commune_name_ascii,
        name_ar: item.commune_name,
        wilaya: wilayas[item.wilaya_code],
      });
      await newCommune.save();
    }

    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seedDatabase();
