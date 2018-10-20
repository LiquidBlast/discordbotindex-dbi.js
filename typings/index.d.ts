declare module 'dbi.js' {
  export const version: string;
  export class DBIClient {
    public constructor(token: string, options: { id: string });
    
    public postStats(guilds: number, id: string): Promise<Object|Error>;
    public getStats(id: string): Promise<Object|Error>;
  }
}
