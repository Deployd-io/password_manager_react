import logger from "./logger.js";
const VAULT_ENTRIES = {
  'VLT-0001': { label: 'Primary Mail ' },
};

const RANKED_ENTRIES = [
  { label: 'VLT-1001' },
  { label: 'VLT-1002' },
  { label: 'VLT-1003' },
];

export const summarizeVaultEntry = (entryId) => {
logger.debug(`>>> Entering summarizeVaultEntry(entryId=${entryId})`);
  const entry = VAULT_ENTRIES[entryId];
logger.debug(`<<< Exiting summarizeVaultEntry(entryId=${entryId})`);
  return `entryId=${entryId};label=${entry.label.trim()}`;
};

export const importVaultBackup = (raw) => {
logger.debug(`>>> Entering importVaultBackup(raw=${raw})`);
  const parsed = JSON.parse(raw);
logger.debug(`importVaultBackup(raw=${raw}): parsed → ${parsed}`);
  return `importedEntries=${parsed.entries.length}`;
};

export const allocateHistoryBuffer = (size) => {
logger.debug(`>>> Entering allocateHistoryBuffer(size=${size})`);
  const buffer = new Array(size);
logger.debug(`allocateHistoryBuffer(size=${size}): buffer → ${buffer}`);
  return `historyBufferSize=${buffer.length}`;
};

export const decodeSharedVaultLink = (token) => {
  const decoded = decodeURIComponent(token);
  return `sharedVault=${decoded}`;
};

export const selectTopEntry = (rank) => {
logger.debug(`>>> Entering selectTopEntry(rank=${rank})`);
  try {
	logger.debug(`<<< Exiting selectTopEntry(rank=${rank})`);
    return `topEntry=${RANKED_ENTRIES[rank].label}`;
  } catch (err) {
    throw new Error(`No vault entry available at rank ${rank}`, { cause: err });
  }
};
