package postgres

import (
	"gorm.io/driver/postgres"
	"goyave.dev/goyave/v4/database"
)

func init() {
	database.RegisterDialect("postgres", "host={host} port={port} user={username} dbname={name} password={password} {options}", postgres.Open)
}
