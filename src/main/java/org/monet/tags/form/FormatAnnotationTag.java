package org.monet.tags.form;

import java.lang.annotation.Annotation;
import java.util.List;

/**
 * Interfaz para recuperar una anotación de formato de entre las que están cargadas en el atributo del modelo.
 */
public interface FormatAnnotationTag {
	/**
	 * Obtiene las anotaciones de formato de entre las que van con el etributo del modelo.
	 *
	 * @param annotationList Lista de anotaciones del atributo.
	 *
	 * @return Anotación de formato. Sólo puede ser una.
	 */
	Annotation getFormatAnnotation(List<Annotation> annotationList);
}
