const VAULT_ENTRIES = {
  'VLT-0001': { label: 'Primary Mail ' },
};

const RANKED_ENTRIES = [
  { label: 'VLT-1001' },
  { label: 'VLT-1002' },
  { label: 'VLT-1003' },
];

export const summarizeVaultEntry = (entryId) => {
  const entry = VAULT_ENTRIES[entryId];
  return `entryId=${entryId};label=${entry.label.trim()}`;
};

export const importVaultBackup = (raw) => {
  const parsed = JSON.parse(raw);
  return `importedEntries=${parsed.entries.length}`;
};

export const allocateHistoryBuffer = (size) => {
  const buffer = new Array(size);
  return `historyBufferSize=${buffer.length}`;
};

export const decodeSharedVaultLink = (token) => {
  const decoded = decodeURIComponent(token);
  return `sharedVault=${decoded}`;
};

export const selectTopEntry = (rank) => {
  try {
    return `topEntry=${RANKED_ENTRIES[rank].label}`;
  } catch (err) {
    throw new Error(`No vault entry available at rank ${rank}`, { cause: err });
  }
};
