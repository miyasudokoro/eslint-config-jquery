import fs from "node:fs/promises";
import path from "node:path";

const fixtures = path.join( ".", "test", "fixtures" );

try {
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
