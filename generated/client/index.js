
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
} = require('./runtime/data-proxy')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "8fbc245156db7124f997f4cecdd8d1219e360944"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */

exports.Prisma.DinosaurScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = {
  Dinosaur: 'Dinosaur'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\pepi1\\OneDrive\\Documents\\CodeProjects\\Visual Studio Code GitSync\\Local TS Projects\\deno\\prisma-oak\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.15.0",
  "engineVersion": "8fbc245156db7124f997f4cecdd8d1219e360944",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true,
  "postinstall": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  config.dirname = path.join(process.cwd(), "generated/client")
  config.isBundled = true
}

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)
config.document = dmmf


config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgRGlub3NhdXIgewogIGlkICAgICAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgICAgICAgIFN0cmluZyBAdW5pcXVlCiAgZGVzY3JpcHRpb24gU3RyaW5nCn0K'
config.inlineSchemaHash = '1d12a50aed5f2f25125876ecfd117ff1fbbf22989afbb89f1783b5e79b39dbb8'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}


const { warnEnvConflicts } = require('./runtime/data-proxy')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})


const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

