package org.monet.freemarker;

import java.io.IOException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.freemarker.FreeMarkerConfigurationFactory;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;

/**
 * Singleton to parser Freemarker templates.
 */
public class FreemarkerParser {
	private static Logger log = LoggerFactory.getLogger(FreemarkerParser.class);
	private static FreemarkerParser freemarkerParser = null;

	/**
	 * Obtiene la instancia de la singleton.
	 * 
	 * @return La singleton de parseo de templates.
	 */
	public static FreemarkerParser getInstance() {
		if (freemarkerParser == null) {
			try {
				freemarkerParser = new FreemarkerParser();
			} catch (IOException e) {
				log.warn("Al crear la singleton de configuración de freemarkerParser", e);
			} catch (TemplateException e) {
				log.warn("Al crear la singleton de configuración de freemarkerParser", e);
			}
		}
		return freemarkerParser;
	}

	private Configuration configuration;

	/**
	 * Constructor privado de la singleton a partir del folder donde están los templates.
	 * 
	 * @throws IOException Error en el folder de templates.
	 * @throws TemplateException Error al crear la configuración.
	 */
	private FreemarkerParser() throws IOException, TemplateException {
		FreeMarkerConfigurationFactory factory = new FreeMarkerConfigurationFactory();
		factory.setTemplateLoaderPath("/META-INF/templates");
		configuration = factory.createConfiguration();
	}

	/**
	 * Obtiene el template indicado.
	 * 
	 * @param name Nombre del template que buscará en el folder.
	 * 
	 * @return El template en cuestión.
	 * 
	 * @throws IOException Error al obtener el template de nombre name.
	 */
	public Template getTemplate(String name) throws IOException {
		return configuration.getTemplate(name);
	}
}
