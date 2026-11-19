import React, { useState } from 'react';
import logger from "../utils/logger.js";
import {
  summarizeVaultEntry,
  importVaultBackup,
  allocateHistoryBuffer,
  decodeSharedVaultLink,
  selectTopEntry,
} from '../utils/vaultReports';

const REPORTS = [
  { id: 'entry-summary', label: 'Entry Summary', run: () => summarizeVaultEntry('VLT-9999') },
  { id: 'import-backup', label: 'Import Backup', run: () => importVaultBackup('{"entries":') },
  { id: 'history-buffer', label: 'History Buffer', run: () => allocateHistoryBuffer(-1) },
  { id: 'shared-link', label: 'Shared Link', run: () => decodeSharedVaultLink('%E0%A4%A') },
  { id: 'top-entry', label: 'Top Entry', run: () => selectTopEntry(7) },
];

const VaultReports = () => {
logger.warn('>>> Entering VaultReports()', { "event.action": "VaultReports" });
  const [result, setResult] = useState('');

logger.warn(`VaultReports: result → ${result}`, { "event.action": "VaultReports" });
  const handleRun = (report) => {
	logger.warn(`>>> Entering handleRun(report=${report})`, { "event.action": "handleRun", "logrite.report": report });
    setResult(report.run());
	logger.warn(`<<< Exiting handleRun(report=${report})`, { "event.action": "handleRun", "logrite.report": report });
  };

logger.warn('<<< Exiting VaultReports()', { "event.action": "VaultReports" });
  return (
    <div className="p-4 border-t mt-4">
      <h3 className="font-semibold mb-2">Vault Reports</h3>
      <div className="flex flex-wrap gap-2">
        {REPORTS.map((report) => (
          <button
            key={report.id}
            type="button"
            onClick={() => handleRun(report)}
            className="px-3 py-1 rounded bg-slate-700 text-white text-sm"
          >
            {report.label}
          </button>
        ))}
      </div>
      {result && <p className="mt-2 text-sm">{result}</p>}
    </div>
  );
};

export default VaultReports;
