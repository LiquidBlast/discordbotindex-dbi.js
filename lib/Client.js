const axios = require('axios');

class DBIClient {
    /**
     * @name DBIClient#Constructor
     * @example new this("Token", { id: '1' });
     * @description Create your DBI client.
     * @param token
     * @param options
     */
  constructor(token, options = {}) {
    this.token    = token;
    this.options  = options;
    this.url      = {
      'base'      : 'discordbotindex.com/apiv1',
      'protocol'  : 'https',
       'endpoints': {
        'post'    : {
          'bot'   : 'bot'
        }
      }
    };
  }

    /**
     * @name DBIClient#postStats
     * @example this.postStats(21);
     * @description Post your bot's stats to DBI.
     * @param guilds
     * @param botId
     * @returns {Promise<Error|Object>}
     */
  async postStats(guilds = undefined, botId = this.options.id ? this.options.id : undefined) {
    if (!botId) return new Error("Invalid bot ID");
    if (!guilds) return new Error("Invalid guild count");

    const req = await axios({
        url: `${this.url['protocol']}://${this.url['base']}/${this.url['endpoints']['post']['bot']}/${botId}`,
        method: 'POST',
        data: {'server_count': guilds},
        headers: {
            'User-Agent': 'DBI.JS/0.0.1 (https://www.github.com/PassTheWessel/dbi.js)',
            'Authorization': this.token
        },
        maxRedirects: 0
    });

    return req.data;
  }
    
  async static getStats(id = this.options.id ? this.options.id : undefined) {
    if (!id) return new Error("Invalid ID.");
      
    const req = await axios({
        url: `https://discordbotindex.com/apiv1/bot/${botId}`,
        method: 'GET',
        maxRedirects: 0
    });
    return req.data;
  }
}

module.exports = DBIClient;
