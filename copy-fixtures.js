import { promisify } from "node:util";
import chip from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const exec = promisify( chip.exec );

await exec( "npm install --no-save jquery" );

const fixtures = path.join( ".", "test", "fixtures" );

try {
	await fs.mkdir( path.join( ".", "test" ) );
	await fs.mkdir( fixtures );
} catch ( _ ) {
	await fs.rm(
		fixtures,
		{
			recursive: true
		}
	);

}

await fs.cp(
    path.join( ".", "node_modules", "jquery", "src" ),
    path.join( fixtures, "src" ),
    {
        recursive: true
    }
);
