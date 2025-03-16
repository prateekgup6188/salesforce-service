const jsforce = require('jsforce');
require('dotenv').config();

const getAccounts = async (req, res) => {
  try {
    const conn = new jsforce.Connection(process.env.SALESFORCE_LOGIN_URL);
    await conn.login(process.env.SALESFORCE_USERNAME, process.env.SALESFORCE_PASSWORD + process.env.SALESFORCE_TOKEN);
    const result = await conn.query('SELECT Id, Name FROM Account');
    res.json(result.records);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Salesforce accounts' });
  }
};

module.exports = { getAccounts };