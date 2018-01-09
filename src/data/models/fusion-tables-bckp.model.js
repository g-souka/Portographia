import { fusionTables } from "@/data/connection";


/**
 * Creates query to be sent to API.
 */
export const getData = function(query)
{
	// Create main query
	return fusionTables(query).then(data => {return processData(data)});
}

/**
 * Process data.
 */
const processData = function(data)
{
	let content = new Array();
	let rows = data.data.rows;
	let columns = data.data.columns;

	for (let i in rows)
	{
		let values = rows[i];
		let entry = new Object({"id": i});
		
		for (let j in values)
		{
			let fieldName = columns[j].replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {return index == 0 ? letter.toLowerCase() : letter.toUpperCase();}).replace(/\s+/g, ''); // Camelize string.
			let fieldValue;
			
			if (fieldName === "coordinates")
				fieldValue = {"lat": Number(values[j].split(",")[0]), "lng": Number(values[j].split(",")[1])}
			else if (fieldName === "timestamp" || fieldName === "date")
				fieldValue = new Date(values[j]);
			else
				fieldValue = values[j];

			Object.assign(entry, {[fieldName]: fieldValue})
		}

		content.push(entry);
	}
	
	return content;
}