import {
  createLogger,
  format as _format,
  transports as _transports,
} from "winston";

const logger = createLogger({
  level: "debug",
  format: _format.json(),
  transports: [new _transports.Console()],
});

export default logger;
