import { promisify } from "node:util";
import chip from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const exec = promisify( chip.exec );

await exec( "npm install --no-save jquery" );

const fixtures = path.join( ".", "test", "fixtures" );

try {
	await fs.promises.mkdir( path.join( ".", "test" ) );
	await fs.promises.mkdir( fixtures );
} catch ( _ ) {
	await fs.promises.rm(
		fixtures,
		{
			recursive: true
		}
	);

}

await fs.promises.cp(
    path.join( ".", "node_modules", "jquery", "src" ),
    path.join( fixtures, "src" ),
    {
        recursive: true
    }
);
