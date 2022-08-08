import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.redis = {
    clients: {
      def: {
        port: 6379,          // Redis port
        host: '127.0.0.1',   // Redis host
        password: '',
        db: 0,
      },
      eventKey: {
        port: 6379,          // Redis port
        host: '127.0.0.1',   // Redis host
        password: '',
        db: 1,
      },
      subscribe: {
        port: 6379,          // Redis port
        host: '127.0.0.1',   // Redis host
        password: '',
        db: 2,
      },
    }
  };
  return config;
};
