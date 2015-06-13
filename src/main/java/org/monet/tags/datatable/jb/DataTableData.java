package org.monet.tags.datatable.jb;

import java.io.IOException;
import java.io.Serializable;
import java.io.StringWriter;
import java.util.List;
import org.codehaus.jackson.map.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Información de los botones.
 */
public class DataTableData implements Serializable {
	private static final long serialVersionUID = -8317749944471339294L;
	private Logger log = LoggerFactory.getLogger(getClass());

	private List<?> aaData;

	public DataTableData(List<?> aaData) {
		this.aaData = aaData;
	}

	@Override
	public String toString() {
		ObjectMapper om = new ObjectMapper();
		StringWriter writer = new StringWriter();

		try {
			om.writeValue(writer, aaData);
		} catch (IOException e) {
			log.warn("Al serializar los datos del datatable", e);
		}
		return writer.toString();
	}
}
