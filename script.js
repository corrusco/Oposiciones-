const datosTemario = [
    { id: 2, cat: 'tema-naranja', nombre: 'TEMA 2. LA CONCRECIÓN DEL CURRÍCULO', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. La concreción de los currículos en el marco del proyecto educativo del centro", c: "sec-1", sub: [
            { t: "1.1. Definición de currículo y niveles de concreción curricular" },
            { t: "1.2. El proyecto educativo de centro", sub: [
                { t: "1.2.1. El PCE como concreción del currículo en el centro escolar" },
                { t: "1.2.2. Elementos curriculares en la LOMLOE" },
                { t: "1.2.3. La PGA y la memoria final de curso" }
            ]}
        ]},
        { t: "2. Programación docente para dar respuesta a las distintas necesidades del alumnado: principios pedagógicos que deben tenerse en cuenta, estrategias para su elaboración en el ciclo, curso y aula", c: "sec-2", sub: [
            { t: "2.1. Programación didáctica, programación de aula, unidad de programación y situación de aprendizaje" },
            { t: "2.2. Principios pedagógicos que deben tenerse en cuenta, estrategias para su elaboración en el ciclo, curso y aula", sub: [
                { t: "2.2.1. Principios pedagógicos" },
                { t: "2.2.2. Estrategias para su elaboración en el ciclo, curso y aula" }
            ]}
        ]},
        { t: "3. Coordinación docente", c: "sec-3", sub: [
            { t: "3.1. Equipos de ciclo" },
            { t: "3.2. Comisión de coordinación pedagógica (CCP)" },
            { t: "3.3. La tutoría" }
        ]},
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Alba Pastor, C. (2016). Diseño universal para el aprendizaje: educación para todos y prácticas de enseñanza inclusivas. Madrid: Morata." },
            { t: "Anderson, L. y Krathwohl, D. (eds.) (2001). A Taxonomy for Learning, Teaching and Assessing. A Revision of Bloom’s Taxonomy of Educational Objectives. Nueva York: Longman." },
            { t: "Bernal, J. L., Cano, J. y Lorenzo, J. (2014). Organización de los centros educativos. LOMCE y políticas neoliberales. Zaragoza: Mira Editores." },
            { t: "Booth, T. y Ainscow, M. (2015). Guía para la educación inclusiva. Desarrollando el aprendizaje y la participación en los centros escolares. Madrid: Fuhem." },
            { t: "MEC (1992). Orientación y tutoría, Educación Infantil y Primaria. Madrid: Colección Cajas Rojas." }
        ]}
    ]},
    { id: 3, cat: 'tema-naranja', nombre: 'TEMA 3. LA TUTORÍA', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. La tutoría en la Educación Primaria", c: "sec-1", sub: [
            { t: "1.1. Orientación, tutoría y competencias clave para el aprendizaje permanente" },
            { t: "1.2. Orientación, tutoría y currículo" },
            { t: "1.3. Orientación, acción tutorial y tutoría", sub: [
                { t: "1.3.1. Orientación educativa" },
                { t: "1.3.2. Acción tutorial" },
                { t: "1.3.3. Tutoría" }
            ]},
            { t: "1.4. La figura del tutor" }
        ]},
        { t: "2. Apoyo y orientación en el proceso de aprendizaje", c: "sec-2", sub: [
            { t: "2.1. Áreas de intervención de la orientación" },
            { t: "2.2. Orientación en el proceso de aprendizaje", sub: [
                { t: "2.2.1. Psicología, pedagogía y neurociencia" },
                { t: "2.2.2. Orientación en la personalidad del aprendizaje" },
                { t: "2.2.3. Implicaciones pedagógicas" }
            ]},
            { t: "2.3. Funciones del tutor" }
        ]},
        { t: "3. Colaboración con las familias", c: "sec-3", sub: [
            { t: "3.1. Participación de las familias en el marco del PEC y del PAT" },
            { t: "3.2. Funciones del tutor en relación con las familias" }
        ]},
        { t: "4. Funciones del tutor en relación con el equipo docente y otros profesionales", c: "sec-4" },
        { t: "5. El plan de acción tutorial", c: "sec-5", sub: [
            { t: "5.1. El PAT en el marco del PEC" },
            { t: "5.2. Elaboración y concreción" },
            { t: "5.3. Elementos del PAT" }
        ]},
        { t: "6. Propuestas de acción tutorial", c: "sec-6" },
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Álvarez, M. y Bisquerra, R. (2018). Orientación educativa. Modelos, áreas, estrategias y recursos. Madrid: Wolters Kluwer." },
            { t: "Bisquerra, R. (2012). Orientación, tutoría y educación emocional. Madrid: Síntesis." },
            { t: "Elizondo, C. (2020). Hacia una escuela inclusiva: el diseño universal para el aprendizaje. Barcelona: Octaedro." },
            { t: "Mora, F. (2013). Neuroeducación: solo se puede aprender aquello que se ama. Madrid: Alianza Editorial." }
        ]}
    ]},
    { id: 4, cat: 'tema-naranja', nombre: 'TEMA 4. LA ATENCIÓN A LA DIVERSIDAD', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. La atención a la diversidad del alumnado", c: "sec-1", sub: [
            { t: "1.1. Factores de la diversidad" },
            { t: "1.2. La atención a la diversidad en el sistema educativo", sub: [
                { t: "1.2.1. Breve reseña histórica" },
                { t: "1.2.2. De la integración a la inclusión" }
            ]}
        ]},
        { t: "2. Principios y estrategias", c: "sec-2", sub: [
            { t: "2.1. Principios y estrategias desarrollados en la LOMLOE" },
            { t: "2.2. La atención a la diversidad en la concreción de los currículos" },
            { t: "2.3. Estrategias en el marco del proyecto educativo de centro", sub: [
                { t: "2.3.1. El plan de acción tutorial" },
                { t: "2.3.2. El plan de atención a la diversidad" }
            ]}
        ]},
        { t: "3. Medidas ordinarias de inclusión educativa y atención a la diversidad", c: "sec-3", sub: [
            { t: "3.1. Medidas organizativas" },
            { t: "3.2. Medidas metodológicas" },
            { t: "3.3. Medidas curriculares" },
            { t: "3.4. Medidas sociales" },
            { t: "3.5. Medidas de organización de espacios y tiempos" }
        ]},
        { t: "4. Alumnado con necesidad específica de apoyo educativo", c: "sec-4" },
        { t: "5. Medidas educativas específicas y extraordinarias", c: "sec-5" },
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Alba Pastor, C. (2016). Diseño Universal para el Aprendizaje: Educación para todos y prácticas de enseñanza inclusivas. Madrid: Morata." },
            { t: "Booth, T. y Ainscow, M. (2011). Guía para la educación inclusiva (Index for Inclusion). Madrid: Fuhem." },
            { t: "Includ-ED Consortium (coord.). (2011). Actuaciones de éxito en las escuelas europeas. Madrid: Ministerio de Educación." },
            { t: "Palacios, J., Marchesi, A. y Coll, C. (2014). Desarrollo psicológico y educación I. Psicología evolutiva. Madrid: Alianza Editorial." }
        ]}
    ]},
    { id: 5, cat: 'tema-naranja', nombre: 'TEMA 5. LA EVALUACIÓN', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. La evaluación de los procesos de aprendizaje del alumnado de Educación Primaria", c: "sec-1", sub: [
            { t: "1.1. Concepto y características de la evaluación" },
            { t: "1.2. Planificación de la evaluación" },
            { t: "1.3. Documentos oficiales de evaluación" },
            { t: "1.4. Evaluación de los procesos de enseñanza" },
            { t: "1.5. Evaluación diagnóstica y evaluación del sistema educativo" },
            { t: "1.6. Información a las familias" }
        ]},
        { t: "2. Características, estrategias, técnicas e instrumentos de evaluación", c: "sec-2", sub: [
            { t: "2.1. Estrategias" },
            { t: "2.2. La evaluación del alumnado desde la perspectiva inclusiva" },
            { t: "2.3. Evaluación del alumnado con necesidades específicas de apoyo educativo" }
        ]},
        { t: "3. Promoción y planes específicos de refuerzo", c: "sec-3", sub: [
            { t: "3.1. La promoción en la Educación Primaria" },
            { t: "3.2. El refuerzo educativo" }
        ]},
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Alba Pastor, C. (Coord.) (2016). Diseño Universal para el Aprendizaje: Educación para todos y prácticas de enseñanza inclusivas. Madrid: Morata." },
            { t: "Elizondo, C. (2016). Guía para elaborar un Proyecto Educativo de Centro desde un enfoque inclusivo. (Recurso en línea)." },
            { t: "Guillén, J. (2017). Neuroeducación en el aula: De la teoría a la práctica. Amazon CreateSpace." },
            { t: "Polo, I. (2014). Evaluación, promoción y titulación. Madrid: Wolters Kluwer." }
        ]}
    ]},
    { id: 6, cat: 'tema-amarillo', nombre: 'TEMA 6. LAS TIC', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. Las tecnologías de la información y la comunicación", c: "sec-1", sub: [
            { t: "1.1. Impacto social y educativo de las TIC", sub: [
                { t: "1.1.1. Auge de la Web 2.0 y el uso de internet en los procesos de enseñanza-aprendizaje" },
                { t: "1.1.2. De las TIC a las TAC y las TEP" }
            ]},
            { t: "1.2. Dificultades, riesgos y estrategias para su integración" },
            { t: "1.3. Competencia digital" }
        ]},
        { t: "2. Intervención educativa para su uso y aplicación en las diferentes áreas de conocimiento", c: "sec-2", sub: [
            { t: "2.1. Ejemplos de modelos de integración de las tecnologías en el aula", sub: [
                { t: "2.1.1. TPACK (Technological Pedagogical Content Knowledge)" },
                { t: "2.1.2. SAMR (Sustitución, Aumentación, Modificación, Redefinición)" }
            ]},
            { t: "2.2. Intervención educativa para su uso", sub: [
                { t: "2.2.1. El rol del docente en el uso de las TIC" },
                { t: "2.2.2. Competencia digital docente" },
                { t: "2.2.3. El rol de los alumnos" }
            ]},
            { t: "2.3. Aplicación en las diferentes áreas de conocimiento" },
            { t: "2.4. Recursos y procesos cognitivos" },
            { t: "2.5. Las TIC en la atención a la diversidad" }
        ]},
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Alba Pastor, C. (2016). Diseño Universal para el Aprendizaje: Educación para todos y prácticas de enseñanza inclusivas. Madrid: Morata." },
            { t: "Barroso, J. y Cabero, J. (2015). Nuevos escenarios digitales. Madrid: Pirámide." },
            { t: "Churches, A. (2009). Taxonomía de Bloom para la era digital. Eduteka." },
            { t: "Delors, J. (Coord.) (1996). La educación encierra un tesoro. Madrid: Santillana/UNESCO." },
            { t: "Mishra, P. & Koehler, M. J. (2006). Technological Pedagogical Content Knowledge: A framework for teacher knowledge. Teachers College Record." }
        ]}
    ]},
    { id: 7, cat: 'tema-verde', nombre: 'TEMA 7. CONOCIMIENTO DEL MEDIO', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. El área de Conocimiento del medio natural, social y cultural en la Educación Primaria: enfoque, características y propuestas de intervención educativa", c: "sec-1", sub: [
            { t: "1.1. Enfoque y características de las Ciencias de la Naturaleza y las Ciencias Sociales", sub: [
                { t: "1.1.1. Ciencias de la Naturaleza" },
                { t: "1.1.2. Ciencias Sociales" }
            ]},
            { t: "1.2. Propuestas de intervención educativa" }
        ]},
        { t: "2. Contribución del área al desarrollo de las competencias clave", c: "sec-2" },
        { t: "3. Objetivos, contenidos y criterios de evaluación: aspectos más relevantes", c: "sec-3", sub: [
            { t: "3.1. Objetivos" },
            { t: "3.2. Saberes Básicos" },
            { t: "3.3. Criterios de evaluación" }
        ]},
        { t: "4. Relación con otras áreas del currículo", c: "sec-4" },
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Elizondo, C. (2020). Hacia una educación inclusiva. El Diseño Universal para el Aprendizaje. Barcelona: Octaedro." },
            { t: "Gil-Pérez, D. y Vilches, A. (2005). Educación para la sostenibilidad. Barcelona: Octaedro." },
            { t: "Pagès, J. y Santisteban, A. (2011). Didáctica del Conocimiento del Medio Social y Cultural en la Educación Primaria. Madrid: Síntesis." },
            { t: "Zabala, A. (1999). Enfoque globalizador y pensamiento complejo: una respuesta para la comprensión e intervención en la realidad. Barcelona: Graó." }
        ]}
    ]},
    { id: 8, cat: 'tema-verde', nombre: 'TEMA 8. EL TIEMPO HISTÓRICO', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. Construcción de la noción de tiempo histórico en la Educación Primaria", c: "sec-1", sub: [
            { t: "1.1. Tiempo social, tiempo cronológico y tiempo histórico" },
            { t: "1.2. Construcción de la noción de tiempo histórico" },
            { t: "1.3. Enseñar la noción de tiempo histórico en la escuela" }
        ]},
        { t: "2. Ámbitos de estudio de los procesos y hechos históricos", c: "sec-2", sub: [
            { t: "2.1. Ámbito social" },
            { t: "2.2. Ámbito económico" },
            { t: "2.3. Ámbito político" },
            { t: "2.4. Ámbito cultural" }
        ]},
        { t: "3. El aprendizaje de las grandes etapas históricas de la humanidad", c: "sec-3", sub: [
            { t: "3.1. La prehistoria", sub: [
                { t: "3.1.1. La Edad de Piedra" },
                { t: "3.1.2. La Edad de los Metales" }
            ]},
            { t: "3.2. La historia", sub: [
                { t: "3.2.1. Edad Antigua" },
                { t: "3.2.2. Edad Media" },
                { t: "3.2.3. Edad Moderna" },
                { t: "3.2.4. Edad Contemporánea" }
            ]}
        ]},
        { t: "4. Utilización de documentos orales, escritos y restos materiales", c: "sec-4", sub: [
            { t: "4.1. Fuentes primarias" },
            { t: "4.2. Fuentes secundarias" }
        ]},
        { t: "5. Intervención educativa", c: "sec-5", sub: [
            { t: "5.1. Dificultades de aprendizaje de la historia" },
            { t: "5.2. Principios didácticos" }
        ]},
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Cooper, H. (2002). Didáctica de la historia en la educación infantil y primaria. Madrid: Morata." },
            { t: "Pagès, J. y Santisteban, A. (2011). Didáctica del Conocimiento del Medio Social y Cultural en la Educación Primaria. Madrid: Síntesis." },
            { t: "Trepat, C. y Comes, P. (1998). El tiempo y el espacio en la didáctica de las Ciencias Sociales. Barcelona: Graó." }
        ]}
    ]},
    { id: 9, cat: 'tema-verde', nombre: 'TEMA 9. EL ENTORNO Y SU CONSERVACIÓN', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. El entorno y su conservación", c: "sec-1" },
        { t: "2. Relaciones entre los elementos de los ecosistemas, factores de deterioro y regeneración", c: "sec-2", sub: [
            { t: "2.1. Concepto de ecosistema y elementos" },
            { t: "2.2. Clasificación de los ecosistemas" },
            { t: "2.3. Relación entre los elementos de los ecosistemas" },
            { t: "2.4. Factores de deterioro y regeneración" }
        ]},
        { t: "3. Capacidad de los seres humanos para actuar sobre la naturaleza", c: "sec-3", sub: [
            { t: "3.1. Desarrollo sostenible" },
            { t: "3.2. Educación ambiental" }
        ]},
        { t: "4. Intervención educativa", c: "sec-4" },
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Escobar, B. (2013). El trabajo con la educación ambiental en la escuela primaria." },
            { t: "Margalef, R. (1998). Ecología. Barcelona: Editorial Planeta." },
            { t: "Pujol, R.M. (2003). Didáctica de las ciencias en la educación primaria. Madrid: Síntesis." }
        ]}
    ]},
    { id: 10, cat: 'tema-verde', nombre: 'TEMA 10. FENÓMENOS FÍSICOS Y CAMBIOS QUÍMICOS', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. Las ciencias de la naturaleza desde un enfoque competencial", c: "sec-1" },
        { t: "2. El aprendizaje de los fenómenos físicos y los cambios químicos", c: "sec-2", sub: [
            { t: "2.1. Niveles para el aprendizaje de la ciencia en la escuela" },
            { t: "2.2. Evolución durante la Educación Primaria", sub: [
                { t: "2.2.1. Primeros cursos de Educación Primaria" },
                { t: "2.2.2. Cursos intermedios de Educación Primaria" },
                { t: "2.2.3. Últimos cursos de Educación Primaria" }
            ]}
        ]},
        { t: "3. Estudio de propiedades, características y comportamiento de la materia y la energía", c: "sec-3", sub: [
            { t: "3.1. Estudio de propiedades, características y comportamiento de la materia", sub: [
                { t: "3.1.1. Propiedades de la materia" },
                { t: "3.1.2. Características de la materia" },
                { t: "3.1.3. Comportamientos de la materia" }
            ]},
            { t: "3.2. Estudio de propiedades, características y comportamiento de la energía" }
        ]},
        { t: "4. Planificación y realización de experiencias para el estudio de propiedades, características y comportamiento de la materia y energía", c: "sec-4", sub: [
            { t: "4.1. El alumno como científico" },
            { t: "4.2. El modelo de enseñanza por investigación" },
            { t: "4.3. El laboratorio escolar" },
            { t: "4.4. Las experiencias para el estudio de las propiedades, características y comportamiento de la materia y la energía" }
        ]},
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Charpak, G. (2005). Manos a la obra. Las ciencias en la escuela primaria. Taller del Ciudadano." },
            { t: "Prieto, T., Blanco, A. y González, F. (2000). La materia y los materiales. Madrid: Síntesis." },
            { t: "Sutton, C. (1992). Ideas sobre las ideas de los alumnos. Barcelona: Paidós." },
            { t: "Vos, P. y Verdork, A. (1996). The Particulate Nature of Matter (en The atomic model as a tool for learning)." }
        ]}
    ]},
    { id: 14, cat: 'tema-rojo', nombre: 'TEMA 14. LENGUA Y LITERATURA', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. El área de Lengua castellana y Literatura en Educación Primaria: enfoque, características y propuestas de intervención educativa", c: "sec-1", sub: [
            { t: "1.1. Enfoque" },
            { t: "1.2. Características" },
            { t: "1.3. Propuestas de intervención educativa", sub: [
                { t: "1.3.1. Orientaciones metodológicas" },
                { t: "1.3.2. Principios de intervención educativa" },
                { t: "1.3.3. Actividades" }
            ]}
        ]},
        { t: "2. Contribución del área al desarrollo de las competencias básicas", c: "sec-2" },
        { t: "3. Objetivos, contenidos y criterios de evaluación: aspectos más relevantes", c: "sec-3", sub: [
            { t: "3.1. Objetivos" },
            { t: "3.2. Saberes Básicos" },
            { t: "3.3. Criterios de evaluación" }
        ]},
        { t: "4. Desarrollo de la competencia comunicativa en otras áreas del currículo", c: "sec-4" },
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Cassany, D. (2006). Tras las líneas. Sobre la lectura contemporánea. Barcelona: Anagrama." },
            { t: "Lomas, C. (1999). Cómo enseñar a hacer cosas con las palabras. Barcelona: Paidós." },
            { t: "Mendoza Fillola, A. (2003). Didáctica de la Lengua y la Literatura. Madrid: Pearson Educación." }
        ]}
    ]},
    { id: 15, cat: 'tema-rojo', nombre: 'TEMA 15. LA INTERVENCIÓN EDUCATIVA SOBRE EL LENGUAJE', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. La intervención educativa en la reflexión sistemática sobre el lenguaje en la Educación Primaria en relación con las condiciones de uso: el contexto comunicativo, los ámbitos de uso y el texto", c: "sec-1", sub: [
            { t: "1.1. La intervención educativa" },
            { t: "1.2. El contexto comunicativo" },
            { t: "1.3. Los ámbitos de uso del lenguaje" },
            { t: "1.4. El texto", sub: [
                { t: "1.4.1. Propiedades de los textos" },
                { t: "1.4.2. Tipos de textos y géneros discursivos" }
            ]}
        ]},
        { t: "2. Adquisición de la lectura y la escritura", c: "sec-2", sub: [
            { t: "2.1. Adquisición de la lectura: Procesos y Normativa" },
            { t: "2.2. Adquisición de la escritura" },
            { t: "2.3. Factores intervinientes y beneficios del dominio lectoescritor" }
        ]},
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Cassany, D. (1999). Construir la escritura. Barcelona: Paidós." },
            { t: "Cuetos, F. (2008). Psicología de la lectura. Madrid: Wolters Kluwer." },
            { t: "Ferreiro, E. y Teberosky, A. (1979). Los sistemas de escritura en el desarrollo del niño. Madrid: Siglo XXI." }
        ]}
    ]},
    { id: 16, cat: 'tema-rojo', nombre: 'TEMA 16. LA EDUCACIÓN LITERARIA', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. La educación literaria en el contexto escolar", c: "sec-1", sub: [
            { t: "1.1. La literatura infantil y juvenil" },
            { t: "1.2. La literatura y el currículo en la Educación Primaria" },
            { t: "1.3. La literatura en el contexto escolar" }
        ]},
        { t: "2. Manifestaciones literarias más importantes aplicadas a la Educación Primaria", c: "sec-2", sub: [
            { t: "2.1. Poesía" },
            { t: "2.2. Géneros narrativos" },
            { t: "2.3. El género teatral" }
        ]},
        { t: "3. Técnicas y estrategias de utilización de la literatura infantil y juvenil", c: "sec-3" },
        { t: "4. La biblioteca escolar y la biblioteca de aula como recurso didáctico en la educación literaria", c: "sec-4", sub: [
            { t: "4.1. Biblioteca escolar" },
            { t: "4.2. Biblioteca de aula" },
            { t: "4.3. La inclusión de las TIC" }
        ]},
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Chambers, A. (2007). Dime: Los niños, la lectura y la conversación. México: Fondo de Cultura Económica." },
            { t: "Colomer, T. (2005). Andar entre libros: la lectura literaria en la escuela. México: Fondo de Cultura Económica." },
            { t: "Mendoza Fillola, A. (2004). La educación literaria: bases para la formación de la competencia lectoliteraria. Málaga: Aljibe." }
        ]}
    ]},
    { id: 17, cat: 'tema-rojo', nombre: 'TEMA 17. ADQUISICIÓN Y DESARROLLO DEL LENGUAJE', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. Proceso de adquisición y desarrollo del lenguaje en la Educación Primaria: comprensión y expresión oral, elementos no lingüísticos que acompañan a la comunicación oral", c: "sec-1", sub: [
            { t: "1.1. Bases Teóricas: Del Innatismo a la Neuroeducación" },
            { t: "1.2. Etapas Evolutivas y Desarrollo de Componentes" },
            { t: "1.3. Desarrollo de la comprensión y expresión oral" },
            { t: "1.4. Elementos no lingüísticos: La Comunicación Total" },
            { t: "1.5. Dificultades y Alteraciones del Lenguaje (Enfoque Inclusivo)" }
        ]},
        { t: "2. Estrategias de intervención educativa", c: "sec-2", sub: [
            { t: "2.1. Principios Metodológicos: Del Saber al Saber Hacer" },
            { t: "2.2. Técnicas específicas para el desarrollo del lenguaje oral" },
            { t: "2.3. Tipos de actividades para trabajar la expresión y comprensión oral" }
        ]},
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Cassany, D., Luna, M. y Sanz, G. (2008). Enseñar lengua. Barcelona: Graó." },
            { t: "Juárez, A. y Monfort, M. (2001). El niño que habla: El lenguaje oral en el preescolar. Madrid: CEPE." },
            { t: "Mora, F. (2013). Neuroeducación: solo se puede aprender aquello que se ama. Madrid: Alianza Editorial." }
        ]}
    ]},
    { id: 18, cat: 'tema-rojo', nombre: 'TEMA 18. EL PROCESO LECTOR', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. Desarrollo y características del proceso lector en la Educación Primaria", c: "sec-1", sub: [
            { t: "1.1. Bases del procesamiento Lector: La teoría de la doble vía" },
            { t: "1.2. Etapas del Desarrollo Lector: Modelo de Uta Frith" },
            { t: "1.3. Enfoque Metodológico: Del debate al equilibrio" },
            { t: "1.4. Dificultades Específicas (DEA) y Respuesta Riojana" }
        ]},
        { t: "2. Técnicas y estrategias de comprensión lectora en diferentes situaciones de comunicación y con diferentes tipos de textos", c: "sec-2", sub: [
            { t: "2.1. Tipologías Textuales y Multimodales" },
            { t: "2.2. Estrategias Cognitivas de Comprensión" }
        ]},
        { t: "3. La lectura: planes de fomento y estrategias de intervención educativa", c: "sec-3", sub: [
            { t: "3.1. El Plan Lector de Centro: Un compromiso transversal" },
            { t: "3.2. La Biblioteca Escolar como Centro de Recursos (CREA)" },
            { t: "3.3. El papel de la Familia: El primer modelo lector" }
        ]},
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Cassany, D. (2006). Tras las líneas: sobre la lectura contemporánea. Barcelona: Anagrama." },
            { t: "Dehaene, S. (2014). El cerebro lector: últimas noticias de las neurociencias sobre la lectura, la enseñanza, el aprendizaje y la dislexia. Madrid: Siglo XXI." },
            { t: "Solé, I. (1998). Estrategias de lectura. Barcelona: Graó." }
        ]}
    ]},
    { id: 19, cat: 'tema-rojo', nombre: 'TEMA 19. LA EXPRESIÓN ESCRITA', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. Desarrollo de la expresión escrita en la Educación Primaria", c: "sec-1", sub: [
            { t: "1.1. Etapas del Desarrollo: Del trazo al texto" },
            { t: "1.2. El Proceso Cognitivo de Escritura (Flower y Hayes)" },
            { t: "1.3. Dificultades específicas: Disgrafía y Disortografía" }
        ]},
        { t: "2. Métodos y estrategias de aprendizaje", c: "sec-2", sub: [
            { t: "2.1. Enfoques Metodológicos" },
            { t: "2.2. La Enseñanza de la Ortografía (Competencia Específica 9)" }
        ]},
        { t: "3. Composición de textos y uso de las TIC", c: "sec-3", sub: [
            { t: "3.1. Tipologías Textuales Dominantes (Modelo J.M. Adam)" },
            { t: "3.2. Escritura Digital y Multimodal" }
        ]},
        { t: "4. Estrategias de intervención educativa", c: "sec-4" },
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Cassany, D. (1995). La cocina de la escritura. Barcelona: Anagrama." },
            { t: "Flower, L. & Hayes, J.R. (1981). A Cognitive Process Theory of Writing. College Composition and Communication." },
            { t: "Rodari, G. (1973). Gramática de la fantasía." }
        ]}
    ]},
    { id: 20, cat: 'tema-azul', nombre: 'TEMA 20. EL ÁREA DE MATEMÁTICAS', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. El área de Matemáticas en la Educación Primaria: enfoque, características y propuestas de intervención educativa", c: "sec-1", sub: [
            { t: "1.1. Breve reseña histórica" },
            { t: "1.2. Consideraciones previas" },
            { t: "1.3. Enfoque" },
            { t: "1.4. Características", sub: [
                { t: "1.4.1. De las matemáticas" },
                { t: "1.4.2. De la adquisición del conocimiento matemático" }
            ]},
            { t: "1.5. Propuestas básicas de intervención educativa" }
        ]},
        { t: "2. Contribución al desarrollo de las competencias básicas", c: "sec-2" },
        { t: "3. Objetivos, contenidos y criterios de evaluación: aspectos más relevantes", c: "sec-3" },
        { t: "4. Relación con otras áreas del currículo", c: "sec-4" },
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Chamorro, M. C. (2003). Didáctica de las Matemáticas para Primaria. Madrid: Pearson Educación." },
            { t: "Godino, J. D. y Batanero, C. (2004). Didáctica de las matemáticas para maestros. Granada: Universidad de Granada." },
            { t: "Piaget, J. (1975). La génesis del número en el niño. Guadalupe." },
            { t: "NCTM (National Council of Teachers of Mathematics). (2000). Principios y estándares para la educación matemática. Sevilla: SAEM Thales." }
        ]}
    ]},
    { id: 21, cat: 'tema-azul', nombre: 'TEMA 21. RESOLUCIÓN DE PROBLEMAS', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. Resolución de problemas", c: "sec-1", sub: [
            { t: "1.1. La resolución de problemas desde un enfoque competencial" },
            { t: "1.2. La resolución de problemas a lo largo de la Educación Primaria" },
            { t: "1.3. Resolución de problemas" },
            { t: "1.4. Principales dificultades en la resolución de problemas" }
        ]},
        { t: "2. Diferentes clases y métodos de resolución", c: "sec-2", sub: [
            { t: "2.1. Clasificación de problemas" },
            { t: "2.2. Métodos de resolución de problemas" }
        ]},
        { t: "3. Planificación, gestión de los recursos, representación, interpretación y valoración de resultados", c: "sec-3", sub: [
            { t: "3.1. La planificación en el aula de matemáticas" },
            { t: "3.2. Recursos didácticos para la resolución de problemas" },
            { t: "3.3. Representación, interpretación y valoración de los resultados" }
        ]},
        { t: "4. Estrategias de intervención educativa", c: "sec-4", sub: [
            { t: "4.1. Cómo incorporar la resolución de problemas en la enseñanza de las matemáticas" },
            { t: "4.2. La evaluación de la resolución de problemas matemáticos" },
            { t: "4.3. Reflexiones didácticas sobre la resolución de problemas" }
        ]},
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Blanco Nieto, L. J. (1993). Una clasificación de problemas matemáticos. Épsilon: Revista de la Sociedad Andaluza de Educación Matemática 'Thales'." },
            { t: "Fernández Bravo, J. A. (2014). La resolución de problemas matemáticos: creatividad y razonamiento en la mente de los niños. Madrid: Grupo Mayéutica." },
            { t: "NCTM (2000). Principios y estándares para la educación matemática. Sevilla: SAEM Thales." },
            { t: "Pólya, G. (1992 [orig. 1945]). Cómo plantear y resolver problemas. México: Trillas." }
        ]}
    ]},
    { id: 22, cat: 'tema-azul', nombre: 'TEMA 22. LOS NÚMEROS Y EL CÁLCULO NUMÉRICO', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. El aprendizaje de los números y el cálculo numérico", c: "sec-1", sub: [
            { t: "1.1. Los números y el cálculo desde un enfoque competencial" },
            { t: "1.2. El aprendizaje del número y el cálculo a lo largo de la Educación Primaria" },
            { t: "1.3. El aprendizaje del número y el cálculo numérico" }
        ]},
        { t: "2. El número y los sistemas de numeración", c: "sec-2", sub: [
            { t: "2.1. Números naturales" },
            { t: "2.2. Números enteros" },
            { t: "2.3. Números reales" },
            { t: "2.4. Números romanos" }
        ]},
        { t: "3. Relación entre los números. Las operaciones de cálculo", c: "sec-3", sub: [
            { t: "3.1. Adición y sustracción" },
            { t: "3.2. Multiplicación y división" },
            { t: "3.3. Procedimientos de cálculo", sub: [
                { t: "3.3.1. Cálculo escrito" },
                { t: "3.3.2. Cálculo mental" },
                { t: "3.3.3. Estimación y calculadora" }
            ]}
        ]},
        { t: "4. Intervención educativa", c: "sec-4", sub: [
            { t: "4.1. Pautas educativas para el aprendizaje del concepto de número y el cálculo" },
            { t: "4.2. Recursos y actividades lúdicas y manipulativas", sub: [
                { t: "4.2.1. Las regletas de colores" },
                { t: "4.2.2. Actividades con el ábaco" }
            ]}
        ]},
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Alsina, Á. (2004). Desarrollo de competencias matemáticas con recursos lúdico-manipulativos. Madrid: Narcea." },
            { t: "Bruner, J. S. (1966). Hacia una teoría de la instrucción. México: UTEHA." },
            { t: "Giménez, J. y Girondo, L. (1993). Cálculo en la escuela. Barcelona: Graó." },
            { t: "Ortiz, M. y Ortega, T. (2009). Cálculo mental. Valladolid: Tecnigraf." },
            { t: "Piaget, J. (1975). La génesis del número en el niño. Buenos Aires: Guadalupe." }
        ]}
    ]},
    { id: 23, cat: 'tema-azul', nombre: 'TEMA 23. LAS MAGNITUDES Y SU MEDIDA', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. Las magnitudes y su medida", c: "sec-1", sub: [
            { t: "1.1. Conceptos básicos: magnitud, cantidad y medir" },
            { t: "1.2. La práctica de la medición" }
        ]},
        { t: "2. Unidades e instrumentos de medida", c: "sec-2", sub: [
            { t: "2.1. Sistema métrico decimal" },
            { t: "2.2. Sistema métrico no decimal. Medidas sexagesimales", sub: [
                { t: "2.2.1. Medidas de tiempo" },
                { t: "2.2.2. Medida de la amplitud de los ángulos" }
            ]},
            { t: "2.3. Instrumentos de medida" }
        ]},
        { t: "3. Estimación y aproximación en las mediciones", c: "sec-3" },
        { t: "4. Recursos didácticos e intervención educativa", c: "sec-4", sub: [
            { t: "4.1. Metodología específica y principios" },
            { t: "4.2. Recursos didácticos" },
            { t: "4.3. Atención al alumnado con necesidad específica de apoyo educativo" }
        ]},
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Alsina, Á. (2019). Itinerarios didácticos para la enseñanza de las matemáticas (6-12 años). Barcelona: Graó." },
            { t: "Chamorro, M. C. (Coord.) (2003). Didáctica de las Matemáticas para Primaria. Madrid: Pearson Educación." },
            { t: "Godino, J. D., Batanero, C. y Roa, R. (2004). Medida de magnitudes y su didáctica para maestros. Granada: Proyecto Edumat-Maestros." },
            { t: "Segovia, I. y Rico, L. (Coords.) (2011). Matemáticas para maestros de Educación Primaria. Madrid: Ediciones Pirámide." }
        ]}
    ]},
    { id: 24, cat: 'tema-azul', nombre: 'TEMA 24. LA PERCEPCIÓN ESPACIAL', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. Evolución de la percepción espacial en la Educación Primaria", c: "sec-1", sub: [
            { t: "1.1. Concepto de percepción espacial y espacio" },
            { t: "1.2. Evolución de la percepción espacial", sub: [
                { t: "1.2.1. Jean Piaget" },
                { t: "1.2.2. Van Hiele" }
            ]},
            { t: "1.3. El papel de la geometría en la representación y la percepción espacial en la Educación Primaria" }
        ]},
        { t: "2. Elementos, formas y relaciones geométricas en el entorno: clasificación y representación", c: "sec-2", sub: [
            { t: "2.1. Elementos geométricos" },
            { t: "2.2. Principales formas geométricas", sub: [
                { t: "2.2.1. Formas geométricas en el plano" },
                { t: "2.2.2. Formas geométricas en el espacio" }
            ]},
            { t: "2.3. Transformaciones geométricas" },
            { t: "2.4. Representación geométrica y coordenadas" }
        ]},
        { t: "3. Intervención educativa", c: "sec-3", sub: [
            { t: "3.1. Recursos" },
            { t: "3.2. Dificultades" }
        ]},
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Castañer, M. y Camerino, O. (2004). Didáctica de la Educación Física: una perspectiva crítica y transversal. Madrid: Biblioteca Nueva." },
            { t: "Corberán, R. M. (1989). Didáctica de la geometría: el modelo Van Hiele. Valencia: Universidad de Valencia." },
            { t: "Godino, J. D. y Ruiz, F. (2002). Geometría y su didáctica para maestros. Granada: Universidad de Granada." },
            { t: "Piaget, J. e Inhelder, B. (1948). La representación del espacio en el niño. Madrid: Morata." },
            { t: "Roldán, T. L. y Cabrera, C. R. (2008). Concepción didáctica para la enseñanza y el aprendizaje de la geometría con un enfoque dinámico. Editorial Universitaria." }
        ]}
    ]},
    { id: 25, cat: 'tema-azul', nombre: 'TEMA 25. RECOGIDA, ORGANIZACIÓN Y REPRESENTACIÓN DE LA INFORMACIÓN', indice: [
        { t: "Introducción", c: "sec-intro" },
        { t: "1. Recogida, organización y representación de la información", c: "sec-1", sub: [
            { t: "1.1. Estadística: concepto, tipos, aplicaciones y objetivos" },
            { t: "1.2. Conceptos estadísticos básicos" },
            { t: "1.3. Sistemas de recogida y organización de datos" }
        ]},
        { t: "2. Tablas y mecanismos básicos de tratamiento de datos", c: "sec-2", sub: [
            { t: "2.1. Marcas de conteo" },
            { t: "2.2. Tablas de frecuencias" },
            { t: "2.3. Tablas de contingencias" },
            { t: "2.4. Mecanismos básicos de tratamiento de datos" }
        ]},
        { t: "3. Tipos de gráficos", c: "sec-3", sub: [
            { t: "3.1. Gráfico de barras" },
            { t: "3.2. Gráfico de sectores" },
            { t: "3.3. Gráfico de líneas" },
            { t: "3.4. Pictograma" },
            { t: "3.5. Cartograma" },
            { t: "3.6. Gráfico de dispersión" }
        ]},
        { t: "4. Aplicaciones en las distintas áreas y en la interpretación de datos", c: "sec-4", sub: [
            { t: "4.1. Aplicaciones en las distintas áreas" },
            { t: "4.2. Principios pedagógicos para la interpretación de datos" }
        ]},
        { t: "5. Utilización de las tecnologías de la información y la comunicación para el tratamiento de datos", c: "sec-5" },
        { t: "Conclusión", c: "sec-concl" },
        { t: "Bibliografía", c: "sec-biblio", sub: [
            { t: "Godino, J. D. y Batanero, C. (2004). Estocástica (en Didáctica de las matemáticas para maestros). Granada: Universidad de Granada." },
            { t: "Gorgas, J., Cardiel, N. y Zamorano, J. (2011). Estadística básica para estudiantes de ciencias. Madrid: Universidad Complutense." },
            { t: "Mendenhall, W., Beaver, R. y Beaver, B. (2006). Introducción a la probabilidad y estadística. Cengage Learning." },
            { t: "Watkins, J. C. (2016). An Introduction to the Science of Statistics. Arizona: University of Arizona." }
        ]}
    ]}
];

// LÓGICA DE LA APP
function inicializarMenu() {
    const menu = document.getElementById('menu-principal');
    if(!menu) return;
    menu.innerHTML = '';
    datosTemario.forEach(tema => {
        const btn = document.createElement('button');
        btn.className = `btn ${tema.cat}`;
        btn.innerText = tema.nombre;
        btn.onclick = () => mostrarTema(tema);
        menu.appendChild(btn);
    });
}

function mostrarTema(tema) {
    document.getElementById('menu-principal').classList.add('hidden');
    document.getElementById('vista-tema').classList.remove('hidden');
    document.getElementById('titulo').innerText = tema.nombre;
    const contenedor = document.getElementById('indice-contenido');
    contenedor.innerHTML = '';

    tema.indice.forEach(item => {
        const divPadre = document.createElement('div');
        const btn = document.createElement('button');
        btn.className = `btn ${item.c}`;
        btn.innerText = item.t;
        
        if (item.sub) {
            const contenedorSub = document.createElement('div');
            contenedorSub.classList.add('hidden');
            item.sub.forEach(subItem => {
                const btnSub = document.createElement('button');
                btnSub.className = `btn ${item.c} sub-nivel-1`;
                btnSub.innerText = subItem.t;
                if (subItem.sub) {
                    const cSub2 = document.createElement('div');
                    cSub2.classList.add('hidden');
                    subItem.sub.forEach(s3 => {
                        const btn3 = document.createElement('button');
                        btn3.className = `btn ${item.c} sub-nivel-2`;
                        btn3.innerText = s3.t;
                        cSub2.appendChild(btn3);
                    });
                    btnSub.onclick = (e) => { e.stopPropagation(); cSub2.classList.toggle('hidden'); };
                    contenedorSub.appendChild(btnSub);
                    contenedorSub.appendChild(cSub2);
                } else { contenedorSub.appendChild(btnSub); }
            });
            btn.onclick = () => contenedorSub.classList.toggle('hidden');
            divPadre.appendChild(btn);
            divPadre.appendChild(contenedorSub);
        } else { divPadre.appendChild(btn); }
        contenedor.appendChild(divPadre);
    });
}

function irAlMenu() {
    document.getElementById('menu-principal').classList.remove('hidden');
    document.getElementById('vista-tema').classList.add('hidden');
    document.getElementById('titulo').innerText = "Temario Oposiciones";
}

document.addEventListener('DOMContentLoaded', inicializarMenu);
