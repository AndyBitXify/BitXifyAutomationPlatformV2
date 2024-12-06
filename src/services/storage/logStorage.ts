import { Log } from '../../types/log';

const LOGS_KEY = 'bitxify_logs';

export const logStorage = {
  getLogs: (): Log[] => {
    const logs = localStorage.getItem(LOGS_KEY);
    return logs ? JSON.parse(logs) : [];
  },

  addLog: (log: Log) => {
    const logs = logStorage.getLogs();
    logs.push(log);
    localStorage.setItem(LOGS_KEY, JSON.stringify(logs));
  }
};