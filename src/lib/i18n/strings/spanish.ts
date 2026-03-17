import { ComponentStrings } from '@digitaldefiance/i18n-lib';
import {
  DigitalBurnbagStringKey,
  DigitalBurnbagStrings,
} from '../../enumerations/digitalburnbag-strings';

export const DigitalBurnbagSpanishStrings: ComponentStrings<DigitalBurnbagStringKey> =
  {
    [DigitalBurnbagStrings.KeyFeatures_1]:
      'Almacene archivos de forma segura con reglas de publicación o eliminación automática.',
    [DigitalBurnbagStrings.KeyFeatures_2]:
      'Cree "Canarios" para monitorear su actividad digital o física.',
    [DigitalBurnbagStrings.KeyFeatures_3]:
      'Las acciones se activan según el estado del canario (p. ej., inactividad).',
    [DigitalBurnbagStrings.KeyFeatures_4]:
      'Códigos de coacción para acciones de emergencia inmediatas.',
    [DigitalBurnbagStrings.SiteDescription]:
      'Almacene archivos de forma segura con reglas de publicación o eliminación automática basadas en el monitoreo de actividad digital y física.',
    [DigitalBurnbagStrings.SiteTagline]: 'Sus datos, sus reglas',
    [DigitalBurnbagStrings.Nav_MyFiles]: 'Mis archivos',
    [DigitalBurnbagStrings.Nav_SharedWithMe]: 'Compartido conmigo',
    [DigitalBurnbagStrings.Nav_Favorites]: 'Favoritos',
    [DigitalBurnbagStrings.Nav_Recent]: 'Recientes',
    [DigitalBurnbagStrings.Nav_Trash]: 'Papelera',
    [DigitalBurnbagStrings.Nav_Activity]: 'Actividad',
    [DigitalBurnbagStrings.Nav_Analytics]: 'Analítica',
    [DigitalBurnbagStrings.Nav_Canary]: 'Canario',
    [DigitalBurnbagStrings.Nav_Vaults]: 'Bóvedas',
    [DigitalBurnbagStrings.Nav_FileSections]: 'Secciones de archivos',

    // -- Vault Container --
    [DigitalBurnbagStrings.Vault_Title]: 'Contenedores de bóveda',
    [DigitalBurnbagStrings.Vault_CreateNew]: 'Nueva bóveda',
    [DigitalBurnbagStrings.Vault_NameLabel]: 'Nombre de la bóveda',
    [DigitalBurnbagStrings.Vault_DescriptionLabel]: 'Descripción',
    [DigitalBurnbagStrings.Vault_Create]: 'Crear',
    [DigitalBurnbagStrings.Vault_Cancel]: 'Cancelar',
    [DigitalBurnbagStrings.Vault_Empty]: 'Sin bóvedas',
    [DigitalBurnbagStrings.Vault_EmptyDesc]:
      'Cree una bóveda para comenzar a almacenar archivos de forma segura.',
    [DigitalBurnbagStrings.Vault_Files]: 'archivos',
    [DigitalBurnbagStrings.Vault_Folders]: 'carpetas',
    [DigitalBurnbagStrings.Vault_State]: 'Estado',
    [DigitalBurnbagStrings.Vault_SealStatus]: 'Estado del sello',
    [DigitalBurnbagStrings.Vault_AllPristine]: 'Todos intactos',
    [DigitalBurnbagStrings.Vault_SomeAccessed]: 'Algunos accedidos',
    [DigitalBurnbagStrings.Vault_Open]: 'Abrir',
    [DigitalBurnbagStrings.Vault_Lock]: 'Bloquear',
    [DigitalBurnbagStrings.Vault_Destroy]: 'Destruir',
    [DigitalBurnbagStrings.Vault_CreateFailed]: 'Error al crear la bóveda',
    [DigitalBurnbagStrings.Vault_LoadFailed]: 'Error al cargar las bóvedas',
    [DigitalBurnbagStrings.Vault_Created]: 'Bóveda creada',

    [DigitalBurnbagStrings.FileBrowser_ColName]: 'Nombre',
    [DigitalBurnbagStrings.FileBrowser_ColSize]: 'Tamaño',
    [DigitalBurnbagStrings.FileBrowser_ColModified]: 'Modificado',
    [DigitalBurnbagStrings.FileBrowser_ColType]: 'Tipo',
    [DigitalBurnbagStrings.FileBrowser_EmptyFolder]: 'Esta carpeta está vacía',
    [DigitalBurnbagStrings.FileBrowser_SelectAll]: 'Seleccionar todo',
    [DigitalBurnbagStrings.FileBrowser_FolderPath]: 'Ruta de carpeta',
    [DigitalBurnbagStrings.FileBrowser_Loading]:
      'Cargando contenido de la carpeta',
    [DigitalBurnbagStrings.FileBrowser_TypeFolder]: 'Carpeta',
    [DigitalBurnbagStrings.FileBrowser_TypeFile]: 'Archivo',
    [DigitalBurnbagStrings.Action_Rename]: 'Renombrar',
    [DigitalBurnbagStrings.Action_Move]: 'Mover',
    [DigitalBurnbagStrings.Action_Copy]: 'Copiar',
    [DigitalBurnbagStrings.Action_Delete]: 'Eliminar',
    [DigitalBurnbagStrings.Action_Share]: 'Compartir',
    [DigitalBurnbagStrings.Action_Download]: 'Descargar',
    [DigitalBurnbagStrings.Action_Duplicate]: 'Duplicar',
    [DigitalBurnbagStrings.Action_History]: 'Historial',
    [DigitalBurnbagStrings.Action_Permissions]: 'Permisos',
    [DigitalBurnbagStrings.Action_Preview]: 'Vista previa',
    [DigitalBurnbagStrings.Action_More]: 'Más…',
    [DigitalBurnbagStrings.Action_Paste]: 'Pegar',
    [DigitalBurnbagStrings.Action_UploadNewVersion]: 'Subir nueva versión',
    [DigitalBurnbagStrings.Trash_ColName]: 'Nombre',
    [DigitalBurnbagStrings.Trash_ColOriginalPath]: 'Ruta original',
    [DigitalBurnbagStrings.Trash_ColDeleted]: 'Eliminado',
    [DigitalBurnbagStrings.Trash_ColTimeRemaining]: 'Tiempo restante',
    [DigitalBurnbagStrings.Trash_ColActions]: 'Acciones',
    [DigitalBurnbagStrings.Trash_Empty]: 'La papelera está vacía',
    [DigitalBurnbagStrings.Trash_Restore]: 'Restaurar',
    [DigitalBurnbagStrings.Trash_DeletePermanently]: 'Eliminar permanentemente',
    [DigitalBurnbagStrings.Trash_Loading]: 'Cargando papelera',
    [DigitalBurnbagStrings.Trash_Expired]: 'Expirado',
    [DigitalBurnbagStrings.Trash_DaysRemaining]: '{count} días',
    [DigitalBurnbagStrings.Trash_HoursRemaining]: '{count} horas',
    [DigitalBurnbagStrings.Share_Title]: 'Compartir — {fileName}',
    [DigitalBurnbagStrings.Share_WithUser]: 'Compartir con un usuario',
    [DigitalBurnbagStrings.Share_EmailLabel]: 'Correo electrónico',
    [DigitalBurnbagStrings.Share_PermView]: 'Ver',
    [DigitalBurnbagStrings.Share_PermEdit]: 'Editar',
    [DigitalBurnbagStrings.Share_Button]: 'Compartir',
    [DigitalBurnbagStrings.Share_AdvancedOptions]:
      'Opciones avanzadas de uso compartido',
    [DigitalBurnbagStrings.Share_EncryptionMode]: 'Modo de cifrado',
    [DigitalBurnbagStrings.Share_ServerProxied]: 'proxy del servidor',
    [DigitalBurnbagStrings.Share_ServerProxiedDesc]:
      'El servidor descifra en nombre del destinatario. La opción más sencilla.',
    [DigitalBurnbagStrings.Share_EphemeralKeyPair]: 'par de claves efímero',
    [DigitalBurnbagStrings.Share_EphemeralKeyPairDesc]:
      'Genera un par de claves de un solo uso. La clave privada está en el fragmento de URL.',
    [DigitalBurnbagStrings.Share_RecipientPublicKey]:
      'clave pública del destinatario',
    [DigitalBurnbagStrings.Share_RecipientPublicKeyDesc]:
      'Cifra con la clave pública del destinatario. Lo más seguro para destinatarios conocidos.',
    [DigitalBurnbagStrings.Share_RecipientKeyLabel]:
      'Clave pública del destinatario',
    [DigitalBurnbagStrings.Share_PasswordLabel]: 'Contraseña (opcional)',
    [DigitalBurnbagStrings.Share_ExpiresAtLabel]: 'Expira el',
    [DigitalBurnbagStrings.Share_MaxAccessLabel]: 'Número máximo de accesos',
    [DigitalBurnbagStrings.Share_ScopeLabel]: 'Alcance del enlace',
    [DigitalBurnbagStrings.Share_ScopeSpecific]: 'Personas específicas',
    [DigitalBurnbagStrings.Share_ScopeOrganization]: 'Organización',
    [DigitalBurnbagStrings.Share_ScopeAnonymous]: 'Anónimo',
    [DigitalBurnbagStrings.Share_BlockDownload]:
      'Bloquear descarga (solo vista previa)',
    [DigitalBurnbagStrings.Share_CreateLink]: 'Crear enlace de uso compartido',
    [DigitalBurnbagStrings.Share_MagnetWarning]:
      'Las URL magnet son irrevocables. Una vez compartido, cualquiera con la URL puede acceder al archivo.',
    [DigitalBurnbagStrings.Share_GetMagnetUrl]: 'Obtener URL magnet',
    [DigitalBurnbagStrings.Share_Close]: 'Cerrar',
    [DigitalBurnbagStrings.Share_Failed]: 'Error al compartir',
    [DigitalBurnbagStrings.Share_LinkFailed]: 'Error al crear el enlace',
    [DigitalBurnbagStrings.Share_MagnetFailed]:
      'Error al obtener la URL magnet',
    [DigitalBurnbagStrings.Upload_DropOrBrowse]:
      'Arrastre archivos aquí o haga clic para explorar',
    [DigitalBurnbagStrings.Upload_DropZoneLabel]: 'Zona de carga de archivos',
    [DigitalBurnbagStrings.Upload_Failed]: 'Error en la carga',

    // -- Upload New Version --
    [DigitalBurnbagStrings.Upload_NewVersion]: 'Subir nueva versión',
    [DigitalBurnbagStrings.Upload_NewVersionTitle]: 'Subir nueva versión',
    [DigitalBurnbagStrings.Upload_NewVersionDesc]:
      'Seleccione un archivo para subir como nueva versión. El archivo debe ser del mismo tipo que el original.',
    [DigitalBurnbagStrings.Upload_NewVersionSelect]: 'Seleccionar archivo',
    [DigitalBurnbagStrings.Upload_NewVersionUploading]:
      'Subiendo nueva versión…',
    [DigitalBurnbagStrings.Upload_NewVersionSuccess]:
      'Nueva versión subida exitosamente',
    [DigitalBurnbagStrings.Upload_NewVersionFailed]:
      'Error al subir la nueva versión',
    [DigitalBurnbagStrings.Upload_NewVersionMimeTypeMismatch]:
      'Tipo de archivo incompatible: se esperaba {expected} pero se recibió {actual}',

    [DigitalBurnbagStrings.Preview_CloseLabel]: 'Cerrar vista previa',
    [DigitalBurnbagStrings.Preview_Download]: 'Descargar',
    [DigitalBurnbagStrings.Preview_Close]: 'Cerrar',
    [DigitalBurnbagStrings.Preview_TypeLabel]: 'Tipo: {mimeType}',
    [DigitalBurnbagStrings.Preview_NotAvailable]:
      'Vista previa no disponible para este tipo de archivo.',
    [DigitalBurnbagStrings.Preview_VideoNotSupported]:
      'Su navegador no admite la reproducción de video.',
    [DigitalBurnbagStrings.Preview_LoadFailed]: 'Error al cargar el contenido',
    [DigitalBurnbagStrings.Bulk_ItemsSelected]:
      '{count} elementos seleccionados',
    [DigitalBurnbagStrings.Bulk_ClearSelection]: 'Borrar selección',
    [DigitalBurnbagStrings.Bulk_Succeeded]: '{count} exitosos',
    [DigitalBurnbagStrings.Bulk_Failed]: '{count} fallidos',
    [DigitalBurnbagStrings.ACL_ColPrincipal]: 'Principal',
    [DigitalBurnbagStrings.ACL_ColType]: 'Tipo',
    [DigitalBurnbagStrings.ACL_ColPermission]: 'Permiso',
    [DigitalBurnbagStrings.ACL_ColActions]: 'Acciones',
    [DigitalBurnbagStrings.ACL_Remove]: 'Eliminar',
    [DigitalBurnbagStrings.ACL_Add]: 'Agregar',
    [DigitalBurnbagStrings.ACL_UserOrGroupPlaceholder]: 'ID de usuario o grupo',
    [DigitalBurnbagStrings.ACL_InheritedFrom]: 'Heredado de {source}',
    [DigitalBurnbagStrings.ACL_AdvancedPermissions]: 'Permisos avanzados',
    [DigitalBurnbagStrings.ACL_PermissionFlags]: 'Indicadores de permisos',
    [DigitalBurnbagStrings.ACL_PermissionSetName]:
      'Nombre del conjunto de permisos',
    [DigitalBurnbagStrings.ACL_CreateSet]: 'Crear conjunto',
    [DigitalBurnbagStrings.ACL_CustomSets]:
      'Conjuntos de permisos personalizados',
    [DigitalBurnbagStrings.ACL_Mixed]: 'Mixto',
    [DigitalBurnbagStrings.ACL_MixedTooltip]:
      'No todos los elementos seleccionados comparten este permiso',
    [DigitalBurnbagStrings.ACL_ApplyToAll]:
      'Aplicar a todos los elementos seleccionados',
    [DigitalBurnbagStrings.ACL_MultiItemTitle]: 'Permisos — {count} elementos',
    [DigitalBurnbagStrings.ACL_SaveFailed]: 'Error al guardar los permisos',
    [DigitalBurnbagStrings.ACL_Saved]: 'Permisos guardados',
    [DigitalBurnbagStrings.Canary_Bindings]: 'Vinculaciones de canario',
    [DigitalBurnbagStrings.Canary_AddBinding]: 'Agregar vinculación',
    [DigitalBurnbagStrings.Canary_ColCondition]: 'Condición',
    [DigitalBurnbagStrings.Canary_ColAction]: 'Acción',
    [DigitalBurnbagStrings.Canary_ColTarget]: 'Objetivo',
    [DigitalBurnbagStrings.Canary_ColActions]: 'Acciones',
    [DigitalBurnbagStrings.Canary_NoBindings]:
      'No hay vinculaciones configuradas',
    [DigitalBurnbagStrings.Canary_DryRun]: 'Simulación',
    [DigitalBurnbagStrings.Canary_DeleteBinding]: 'Eliminar vinculación',
    [DigitalBurnbagStrings.Canary_NewBinding]: 'Nueva vinculación',
    [DigitalBurnbagStrings.Canary_ProviderLabel]: 'Proveedor',
    [DigitalBurnbagStrings.Canary_TargetIdsLabel]:
      'IDs de objetivo (separados por comas)',
    [DigitalBurnbagStrings.Canary_NoRecipientList]:
      'Sin lista de destinatarios',
    [DigitalBurnbagStrings.Canary_CascadeDelayLabel]:
      'Retraso en cascada (segundos)',
    [DigitalBurnbagStrings.Canary_Create]: 'Crear',
    [DigitalBurnbagStrings.Canary_Cancel]: 'Cancelar',
    [DigitalBurnbagStrings.Canary_RecipientLists]: 'Listas de destinatarios',
    [DigitalBurnbagStrings.Canary_AddList]: 'Agregar lista',
    [DigitalBurnbagStrings.Canary_ColListName]: 'Nombre',
    [DigitalBurnbagStrings.Canary_ColRecipients]: 'Destinatarios',
    [DigitalBurnbagStrings.Canary_NoLists]: 'Sin listas de destinatarios',
    [DigitalBurnbagStrings.Canary_NewList]: 'Nueva lista de destinatarios',
    [DigitalBurnbagStrings.Canary_ListNameLabel]: 'Nombre de la lista',
    [DigitalBurnbagStrings.Canary_RecipientsLabel]:
      'Destinatarios (uno por línea: correo, etiqueta)',
    [DigitalBurnbagStrings.Canary_DryRunReport]: 'Informe de simulación',
    [DigitalBurnbagStrings.Canary_AffectedFiles]: 'Archivos afectados: {count}',
    [DigitalBurnbagStrings.Canary_RecipientsCount]: 'Destinatarios: {count}',
    [DigitalBurnbagStrings.Canary_ActionsLabel]: 'Acciones:',
    [DigitalBurnbagStrings.Notifications_Label]: 'Notificaciones',
    [DigitalBurnbagStrings.Notifications_Empty]: 'Sin notificaciones',
    [DigitalBurnbagStrings.Activity_AllOperations]: 'Todas las operaciones',
    [DigitalBurnbagStrings.Activity_NoActivity]:
      'No hay actividad para mostrar',
    [DigitalBurnbagStrings.Activity_OnTarget]: '{actor} en {target}',
    [DigitalBurnbagStrings.Analytics_StorageUsage]: 'Uso de almacenamiento',
    [DigitalBurnbagStrings.Analytics_UsageSummary]:
      '{used} de {quota} usado ({percent}%)',
    [DigitalBurnbagStrings.Analytics_ByFileType]: 'Por tipo de archivo',
    [DigitalBurnbagStrings.Analytics_ColCategory]: 'Categoría',
    [DigitalBurnbagStrings.Analytics_ColFiles]: 'Archivos',
    [DigitalBurnbagStrings.Analytics_ColSize]: 'Tamaño',
    [DigitalBurnbagStrings.Analytics_LargestItems]: 'Elementos más grandes',
    [DigitalBurnbagStrings.Analytics_ColName]: 'Nombre',
    [DigitalBurnbagStrings.Analytics_ColItemActions]: 'Acciones',
    [DigitalBurnbagStrings.Analytics_Trash]: 'Papelera',
    [DigitalBurnbagStrings.Analytics_StaleFiles]: 'Archivos obsoletos',
    [DigitalBurnbagStrings.Analytics_ColAge]: 'Antigüedad',
    [DigitalBurnbagStrings.Analytics_AgeDays]: '{count} días',
    [DigitalBurnbagStrings.Analytics_ScheduleDestroy]: 'Programar destrucción',
    [DigitalBurnbagStrings.Page_ItemMoved]: 'Elemento movido',
    [DigitalBurnbagStrings.Page_MoveFailed]: 'Error al mover el elemento',
    [DigitalBurnbagStrings.Page_LoadFolderFailed]: 'Error al cargar la carpeta',
    [DigitalBurnbagStrings.Page_LoadTrashFailed]: 'Error al cargar la papelera',
    [DigitalBurnbagStrings.Page_LoadSharedFailed]:
      'Error al cargar elementos compartidos',
    [DigitalBurnbagStrings.Page_LoadCanaryFailed]:
      'Error al cargar la configuración del canario',
    [DigitalBurnbagStrings.Page_LoadActivityFailed]:
      'Error al cargar la actividad',
    [DigitalBurnbagStrings.Page_LoadAnalyticsFailed]:
      'Error al cargar la analítica de almacenamiento',
    [DigitalBurnbagStrings.Page_LoadPermissionsFailed]:
      'Error al cargar los permisos',
    [DigitalBurnbagStrings.Page_DeleteFailed]: 'Error al eliminar',
    [DigitalBurnbagStrings.Page_RenameFailed]: 'Error al renombrar',
    [DigitalBurnbagStrings.Page_Renamed]: 'Renombrado',
    [DigitalBurnbagStrings.Page_ItemsMovedToTrash]:
      '{count} elementos movidos a la papelera',
    [DigitalBurnbagStrings.Page_Restored]: '{name} restaurado',
    [DigitalBurnbagStrings.Page_PermanentlyDeleted]:
      '{name} eliminado permanentemente',
    [DigitalBurnbagStrings.Page_RestoreFailed]: 'Error al restaurar',
    [DigitalBurnbagStrings.Page_PermanentDeleteFailed]:
      'Error al eliminar permanentemente',
    [DigitalBurnbagStrings.Page_BindingCreated]: 'Vinculación creada',
    [DigitalBurnbagStrings.Page_BindingDeleted]: 'Vinculación eliminada',
    [DigitalBurnbagStrings.Page_RecipientListCreated]:
      'Lista de destinatarios creada',
    [DigitalBurnbagStrings.Page_UserNotFound]: 'Usuario no encontrado',
    [DigitalBurnbagStrings.Page_PathNotFound]:
      'No se encontró la ruta de la carpeta. Es posible que se haya movido o eliminado.',
    [DigitalBurnbagStrings.Page_NoFileSelected]: 'Ningún archivo seleccionado',
    [DigitalBurnbagStrings.Page_UploadFailed]: 'Error en la carga',
    [DigitalBurnbagStrings.Page_ErrorOccurred]: 'Se produjo un error',
    [DigitalBurnbagStrings.Page_RenamePrompt]: 'Nuevo nombre:',

    // -- Phix (ciclo fénix de renombrado) --
    [DigitalBurnbagStrings.Phix_Button]: 'Phix',
    [DigitalBurnbagStrings.Phix_Tooltip]:
      'Renombrado por ciclo fénix: destruir el nombre antiguo, renacer con el nuevo',
    [DigitalBurnbagStrings.Phix_Confirm_Title]: 'Confirmar operación Phix',
    [DigitalBurnbagStrings.Phix_Confirm_MetadataOnly]:
      'Solo renombrado de metadatos. No se tocarán bloques. Rápido e indoloro.',
    [DigitalBurnbagStrings.Phix_Confirm_FullCycle]:
      'Ciclo fénix completo. Los datos se recifrarán y el original se destruirá. Esto puede tardar un tiempo.',
    [DigitalBurnbagStrings.Phix_Progress]: 'Phix en progreso…',
    [DigitalBurnbagStrings.Phix_Complete]:
      'Phix completado — renacido de las cenizas',
    [DigitalBurnbagStrings.Phix_Failed]: 'Phix fallido',
    [DigitalBurnbagStrings.Phix_Mascot_Tiny]: 'phix-mascot-tiny',
    [DigitalBurnbagStrings.Phix_Mascot_Small]: 'phix-mascot-small',
    [DigitalBurnbagStrings.Phix_Mascot_Medium]: 'phix-mascot-medium',
    [DigitalBurnbagStrings.Phix_Mascot_Large]: 'phix-mascot-large',
    [DigitalBurnbagStrings.Phix_Mascot_Massive]: 'phix-mascot-massive',

    [DigitalBurnbagStrings.Common_Close]: 'Cerrar',
    [DigitalBurnbagStrings.Common_Save]: 'Guardar',
    [DigitalBurnbagStrings.Common_Back]: 'Atrás',
    [DigitalBurnbagStrings.Common_Next]: 'Siguiente',
    [DigitalBurnbagStrings.Common_Finish]: 'Finalizar',
    [DigitalBurnbagStrings.Common_Test]: 'Probar',
    [DigitalBurnbagStrings.Common_Connect]: 'Conectar',
    [DigitalBurnbagStrings.Common_Disconnect]: 'Desconectar',
    [DigitalBurnbagStrings.Common_Retry]: 'Reintentar',
    [DigitalBurnbagStrings.Common_Enable]: 'Habilitar',
    [DigitalBurnbagStrings.Common_Disable]: 'Deshabilitar',
    [DigitalBurnbagStrings.Common_Loading]: 'Cargando...',
    [DigitalBurnbagStrings.Common_Error]: 'Error',
    [DigitalBurnbagStrings.Common_Success]: 'Éxito',

    // -- Provider Registration --
    [DigitalBurnbagStrings.Provider_Title]: 'Proveedores Canario',
    [DigitalBurnbagStrings.Provider_Subtitle]:
      'Conecte servicios para monitorear su actividad y activar acciones de seguridad',
    [DigitalBurnbagStrings.Provider_MyConnections]: 'Mis conexiones',
    [DigitalBurnbagStrings.Provider_AddProvider]: 'Agregar proveedor',
    [DigitalBurnbagStrings.Provider_NoConnections]:
      'Sin proveedores conectados',
    [DigitalBurnbagStrings.Provider_NoConnectionsDesc]:
      'Conecte un proveedor para comenzar a monitorear su actividad',
    [DigitalBurnbagStrings.Provider_SearchPlaceholder]: 'Buscar proveedores...',
    [DigitalBurnbagStrings.Provider_FilterByCategory]: 'Filtrar por categoría',
    [DigitalBurnbagStrings.Provider_AllCategories]: 'Todas las categorías',
    [DigitalBurnbagStrings.Provider_LastChecked]: 'Última verificación: {time}',
    [DigitalBurnbagStrings.Provider_LastActivity]: 'Última actividad: {time}',
    [DigitalBurnbagStrings.Provider_NeverChecked]: 'Nunca verificado',
    [DigitalBurnbagStrings.Provider_CheckNow]: 'Verificar ahora',
    [DigitalBurnbagStrings.Provider_Settings]: 'Configuración',
    [DigitalBurnbagStrings.Provider_ViewDetails]: 'Ver detalles',

    // -- Provider Status --
    [DigitalBurnbagStrings.ProviderStatus_Connected]: 'Conectado',
    [DigitalBurnbagStrings.ProviderStatus_Pending]: 'Pendiente',
    [DigitalBurnbagStrings.ProviderStatus_Expired]: 'Expirado',
    [DigitalBurnbagStrings.ProviderStatus_Invalid]: 'Inválido',
    [DigitalBurnbagStrings.ProviderStatus_Error]: 'Error',
    [DigitalBurnbagStrings.ProviderStatus_NotConnected]: 'No conectado',

    // -- Provider Categories --
    [DigitalBurnbagStrings.ProviderCategory_PlatformNative]:
      'Nativo de plataforma',
    [DigitalBurnbagStrings.ProviderCategory_PlatformNativeDesc]:
      'Métodos de verificación integrados sin servicios externos',
    [DigitalBurnbagStrings.ProviderCategory_HealthFitness]: 'Salud y fitness',
    [DigitalBurnbagStrings.ProviderCategory_HealthFitnessDesc]:
      'Rastreadores de fitness y aplicaciones de salud',
    [DigitalBurnbagStrings.ProviderCategory_Developer]:
      'Herramientas de desarrollo',
    [DigitalBurnbagStrings.ProviderCategory_DeveloperDesc]:
      'Repositorios de código y plataformas de desarrollo',
    [DigitalBurnbagStrings.ProviderCategory_Communication]: 'Comunicación',
    [DigitalBurnbagStrings.ProviderCategory_CommunicationDesc]:
      'Plataformas de mensajería y chat',
    [DigitalBurnbagStrings.ProviderCategory_SocialMedia]: 'Redes sociales',
    [DigitalBurnbagStrings.ProviderCategory_SocialMediaDesc]:
      'Redes sociales y plataformas de contenido',
    [DigitalBurnbagStrings.ProviderCategory_Productivity]: 'Productividad',
    [DigitalBurnbagStrings.ProviderCategory_ProductivityDesc]:
      'Correo electrónico, calendario y herramientas de productividad',
    [DigitalBurnbagStrings.ProviderCategory_SmartHome]: 'Hogar inteligente',
    [DigitalBurnbagStrings.ProviderCategory_SmartHomeDesc]:
      'Dispositivos IoT y automatización del hogar',
    [DigitalBurnbagStrings.ProviderCategory_Gaming]: 'Juegos',
    [DigitalBurnbagStrings.ProviderCategory_GamingDesc]:
      'Plataformas y servicios de juegos',
    [DigitalBurnbagStrings.ProviderCategory_Financial]: 'Finanzas',
    [DigitalBurnbagStrings.ProviderCategory_FinancialDesc]:
      'Servicios bancarios y financieros',
    [DigitalBurnbagStrings.ProviderCategory_Email]: 'Correo electrónico',
    [DigitalBurnbagStrings.ProviderCategory_EmailDesc]: 'Proveedores de correo',
    [DigitalBurnbagStrings.ProviderCategory_CustomIntegration]:
      'Integración personalizada',
    [DigitalBurnbagStrings.ProviderCategory_CustomIntegrationDesc]:
      'Cree su propia integración con cualquier servicio',
    [DigitalBurnbagStrings.ProviderCategory_Other]: 'Otros',
    [DigitalBurnbagStrings.ProviderCategory_OtherDesc]: 'Otros proveedores',

    // -- Provider Names --
    [DigitalBurnbagStrings.ProviderName_Fitbit]: 'Fitbit',
    [DigitalBurnbagStrings.ProviderName_Strava]: 'Strava',
    [DigitalBurnbagStrings.ProviderName_Garmin]: 'Garmin Connect',
    [DigitalBurnbagStrings.ProviderName_Whoop]: 'WHOOP',
    [DigitalBurnbagStrings.ProviderName_Oura]: 'Oura Ring',
    [DigitalBurnbagStrings.ProviderName_GitHub]: 'GitHub',
    [DigitalBurnbagStrings.ProviderName_GitLab]: 'GitLab',
    [DigitalBurnbagStrings.ProviderName_Bitbucket]: 'Bitbucket',
    [DigitalBurnbagStrings.ProviderName_Twitter]: 'Twitter / X',
    [DigitalBurnbagStrings.ProviderName_Mastodon]: 'Mastodon',
    [DigitalBurnbagStrings.ProviderName_Bluesky]: 'Bluesky',
    [DigitalBurnbagStrings.ProviderName_Reddit]: 'Reddit',
    [DigitalBurnbagStrings.ProviderName_Slack]: 'Slack',
    [DigitalBurnbagStrings.ProviderName_Discord]: 'Discord',
    [DigitalBurnbagStrings.ProviderName_Telegram]: 'Telegram',
    [DigitalBurnbagStrings.ProviderName_Google]: 'Google',
    [DigitalBurnbagStrings.ProviderName_Notion]: 'Notion',
    [DigitalBurnbagStrings.ProviderName_HomeAssistant]: 'Home Assistant',
    [DigitalBurnbagStrings.ProviderName_Steam]: 'Steam',
    [DigitalBurnbagStrings.ProviderName_CustomWebhook]: 'Webhook personalizado',
    [DigitalBurnbagStrings.ProviderName_BrightChain]: 'Actividad BrightChain',
    [DigitalBurnbagStrings.ProviderName_ManualCheckin]: 'Verificación manual',
    [DigitalBurnbagStrings.ProviderName_EmailPing]: 'Verificación por correo',
    [DigitalBurnbagStrings.ProviderName_SmsPing]: 'Verificación por SMS',

    // -- Provider Descriptions --
    [DigitalBurnbagStrings.ProviderDesc_Fitbit]:
      'Rastree pasos, frecuencia cardíaca y sueño como prueba de vida',
    [DigitalBurnbagStrings.ProviderDesc_Strava]:
      'Monitoree sus carreras, paseos en bicicleta y entrenamientos',
    [DigitalBurnbagStrings.ProviderDesc_Garmin]:
      'Rastree actividad de dispositivos Garmin',
    [DigitalBurnbagStrings.ProviderDesc_Whoop]:
      'Monitoree datos de recuperación y esfuerzo',
    [DigitalBurnbagStrings.ProviderDesc_Oura]:
      'Rastree sueño y puntuaciones de preparación',
    [DigitalBurnbagStrings.ProviderDesc_GitHub]:
      'Monitoree commits, issues y pull requests',
    [DigitalBurnbagStrings.ProviderDesc_GitLab]:
      'Monitoree commits y merge requests',
    [DigitalBurnbagStrings.ProviderDesc_Bitbucket]:
      'Monitoree commits y pull requests',
    [DigitalBurnbagStrings.ProviderDesc_Twitter]:
      'Monitoree tweets y actividad',
    [DigitalBurnbagStrings.ProviderDesc_Mastodon]:
      'Monitoree toots en cualquier instancia de Mastodon',
    [DigitalBurnbagStrings.ProviderDesc_Bluesky]:
      'Monitoree publicaciones en Bluesky',
    [DigitalBurnbagStrings.ProviderDesc_Reddit]:
      'Monitoree publicaciones y comentarios',
    [DigitalBurnbagStrings.ProviderDesc_Slack]:
      'Monitoree presencia y estado de actividad',
    [DigitalBurnbagStrings.ProviderDesc_Discord]:
      'Monitoree presencia y actividad',
    [DigitalBurnbagStrings.ProviderDesc_Telegram]:
      'Monitoree actividad mediante integración de bot',
    [DigitalBurnbagStrings.ProviderDesc_Google]:
      'Monitoree actividad de Gmail y Calendario',
    [DigitalBurnbagStrings.ProviderDesc_Notion]:
      'Monitoree actividad del espacio de trabajo',
    [DigitalBurnbagStrings.ProviderDesc_HomeAssistant]:
      'Monitoree actividad del hogar inteligente y presencia',
    [DigitalBurnbagStrings.ProviderDesc_Steam]: 'Monitoree actividad de juegos',
    [DigitalBurnbagStrings.ProviderDesc_CustomWebhook]:
      'Integre cualquier servicio que pueda enviar solicitudes HTTP',
    [DigitalBurnbagStrings.ProviderDesc_BrightChain]:
      'Monitoree su actividad en esta plataforma',
    [DigitalBurnbagStrings.ProviderDesc_ManualCheckin]:
      'Confirme manualmente su presencia periódicamente',
    [DigitalBurnbagStrings.ProviderDesc_EmailPing]:
      'Responda a desafíos periódicos por correo electrónico',
    [DigitalBurnbagStrings.ProviderDesc_SmsPing]:
      'Responda a desafíos periódicos por SMS',

    // -- Provider Data Access Descriptions --
    [DigitalBurnbagStrings.ProviderDataAccess_Fitbit]:
      'Accedemos a su resumen de actividad diaria (pasos, minutos activos), datos de frecuencia cardíaca y registros de sueño.',
    [DigitalBurnbagStrings.ProviderDataAccess_Strava]:
      'Accedemos a su feed de actividad para detectar carreras, paseos en bicicleta u otros entrenamientos.',
    [DigitalBurnbagStrings.ProviderDataAccess_Garmin]:
      'Accedemos a sus datos de actividad de Garmin incluyendo entrenamientos, pasos y métricas de salud.',
    [DigitalBurnbagStrings.ProviderDataAccess_Whoop]:
      'Accedemos a sus puntuaciones de recuperación y datos de esfuerzo de WHOOP.',
    [DigitalBurnbagStrings.ProviderDataAccess_Oura]:
      'Accedemos a sus datos de sueño y puntuaciones de preparación de Oura.',
    [DigitalBurnbagStrings.ProviderDataAccess_GitHub]:
      'Accedemos a su feed de actividad pública incluyendo commits, issues, pull requests y comentarios.',
    [DigitalBurnbagStrings.ProviderDataAccess_GitLab]:
      'Accedemos a su actividad de GitLab incluyendo commits, merge requests e issues.',
    [DigitalBurnbagStrings.ProviderDataAccess_Bitbucket]:
      'Accedemos a su actividad de Bitbucket incluyendo commits y pull requests.',
    [DigitalBurnbagStrings.ProviderDataAccess_Twitter]:
      'Accedemos a sus tweets recientes para verificar su actividad continua.',
    [DigitalBurnbagStrings.ProviderDataAccess_Mastodon]:
      'Accedemos a sus toots recientes para verificar su actividad continua.',
    [DigitalBurnbagStrings.ProviderDataAccess_Bluesky]:
      'Accedemos a sus publicaciones recientes para verificar su actividad continua.',
    [DigitalBurnbagStrings.ProviderDataAccess_Reddit]:
      'Accedemos a sus publicaciones y comentarios recientes para verificar su actividad continua.',
    [DigitalBurnbagStrings.ProviderDataAccess_Slack]:
      'Accedemos a su estado de presencia de Slack para verificar que está activo.',
    [DigitalBurnbagStrings.ProviderDataAccess_Discord]:
      'Accedemos a su estado de presencia de Discord para verificar que está activo.',
    [DigitalBurnbagStrings.ProviderDataAccess_Telegram]:
      'Usamos un bot de Telegram para recibir mensajes de verificación de usted.',
    [DigitalBurnbagStrings.ProviderDataAccess_Google]:
      'Accedemos a las marcas de tiempo de sus mensajes de Gmail (no al contenido) para verificar actividad reciente.',
    [DigitalBurnbagStrings.ProviderDataAccess_Notion]:
      'Accedemos a la actividad de su espacio de trabajo de Notion para verificar ediciones recientes.',
    [DigitalBurnbagStrings.ProviderDataAccess_HomeAssistant]:
      'Accedemos a su Home Assistant para detectar movimiento, sensores de puerta y otros indicadores de presencia.',
    [DigitalBurnbagStrings.ProviderDataAccess_Steam]:
      'Accedemos a su perfil de Steam para detectar actividad de juegos reciente.',
    [DigitalBurnbagStrings.ProviderDataAccess_CustomWebhook]:
      'Usted configura un servicio externo para enviarnos webhooks de latido.',
    [DigitalBurnbagStrings.ProviderDataAccess_BrightChain]:
      'Rastreamos automáticamente sus inicios de sesión, accesos a archivos y otras actividades en BrightChain.',
    [DigitalBurnbagStrings.ProviderDataAccess_ManualCheckin]:
      'Usted se registra manualmente a través de la aplicación o sitio web para confirmar que está bien.',
    [DigitalBurnbagStrings.ProviderDataAccess_EmailPing]:
      'Le enviamos correos electrónicos periódicos con un enlace de verificación. Haga clic en el enlace para confirmar.',
    [DigitalBurnbagStrings.ProviderDataAccess_SmsPing]:
      'Le enviamos mensajes SMS periódicos. Responda para confirmar que está bien.',

    // -- Provider Check Intervals --
    [DigitalBurnbagStrings.ProviderInterval_EveryMinute]: 'Cada minuto',
    [DigitalBurnbagStrings.ProviderInterval_Every5Minutes]: 'Cada 5 minutos',
    [DigitalBurnbagStrings.ProviderInterval_Every15Minutes]: 'Cada 15 minutos',
    [DigitalBurnbagStrings.ProviderInterval_Every30Minutes]: 'Cada 30 minutos',
    [DigitalBurnbagStrings.ProviderInterval_EveryHour]: 'Cada hora',
    [DigitalBurnbagStrings.ProviderInterval_Every2Hours]: 'Cada 2 horas',
    [DigitalBurnbagStrings.ProviderInterval_Every4Hours]: 'Cada 4 horas',
    [DigitalBurnbagStrings.ProviderInterval_Daily]: 'Diario',
    [DigitalBurnbagStrings.ProviderInterval_Weekly]: 'Semanal',
    [DigitalBurnbagStrings.ProviderInterval_BiWeekly]: 'Cada dos semanas',
    [DigitalBurnbagStrings.ProviderInterval_Monthly]: 'Mensual',
    [DigitalBurnbagStrings.ProviderInterval_Manual]: 'Verificación manual',
    [DigitalBurnbagStrings.ProviderInterval_Automatic]: 'Automático',
    [DigitalBurnbagStrings.ProviderInterval_Custom]: 'Personalizado',

    // -- Registration Wizard --
    [DigitalBurnbagStrings.Wizard_SelectProvider]: 'Seleccionar proveedor',
    [DigitalBurnbagStrings.Wizard_SelectProviderDesc]:
      'Elija un servicio para conectar para monitoreo de actividad',
    [DigitalBurnbagStrings.Wizard_ReviewPermissions]: 'Revisar permisos',
    [DigitalBurnbagStrings.Wizard_ReviewPermissionsDesc]:
      'Revise qué datos accederemos de este proveedor',
    [DigitalBurnbagStrings.Wizard_ConfigureAbsence]:
      'Configurar detección de ausencia',
    [DigitalBurnbagStrings.Wizard_ConfigureAbsenceDesc]:
      'Establezca cuánto tiempo de inactividad activa su interruptor de seguridad',
    [DigitalBurnbagStrings.Wizard_ConfigureDuress]:
      'Configurar detección de coacción',
    [DigitalBurnbagStrings.Wizard_ConfigureDuressDesc]:
      'Configure palabras clave o patrones que indiquen que está bajo coacción',
    [DigitalBurnbagStrings.Wizard_Authorize]: 'Autorizar',
    [DigitalBurnbagStrings.Wizard_AuthorizeDesc]:
      'Otorgue acceso a su cuenta en este proveedor',
    [DigitalBurnbagStrings.Wizard_EnterApiKey]: 'Ingresar clave API',
    [DigitalBurnbagStrings.Wizard_EnterApiKeyDesc]:
      'Ingrese su clave API para conectar este proveedor',
    [DigitalBurnbagStrings.Wizard_ConfigureWebhook]: 'Configurar webhook',
    [DigitalBurnbagStrings.Wizard_ConfigureWebhookDesc]:
      'Configure un webhook para recibir actualizaciones de actividad',
    [DigitalBurnbagStrings.Wizard_TestConnection]: 'Probar conexión',
    [DigitalBurnbagStrings.Wizard_TestConnectionDesc]:
      'Verifique que la conexión funciona correctamente',
    [DigitalBurnbagStrings.Wizard_Complete]: 'Completado',
    [DigitalBurnbagStrings.Wizard_CompleteDesc]:
      'Proveedor conectado exitosamente',

    // -- Absence Configuration --
    [DigitalBurnbagStrings.Absence_ThresholdLabel]: 'Umbral de ausencia',
    [DigitalBurnbagStrings.Absence_ThresholdHelp]:
      'Cuánto tiempo sin actividad antes de activar el interruptor de seguridad',
    [DigitalBurnbagStrings.Absence_GracePeriodLabel]: 'Período de gracia',
    [DigitalBurnbagStrings.Absence_GracePeriodHelp]:
      'Tiempo adicional después del umbral antes de ejecutar acciones',
    [DigitalBurnbagStrings.Absence_SendWarnings]:
      'Enviar notificaciones de advertencia',
    [DigitalBurnbagStrings.Absence_WarningDaysLabel]:
      'Días de advertencia antes del umbral',
    [DigitalBurnbagStrings.Absence_WarningDaysHelp]:
      'Días antes del umbral para enviar advertencias (separados por comas)',
    [DigitalBurnbagStrings.Absence_Days]: 'días',
    [DigitalBurnbagStrings.Absence_Hours]: 'horas',

    // -- Duress Configuration --
    [DigitalBurnbagStrings.Duress_EnableLabel]:
      'Habilitar detección de coacción',
    [DigitalBurnbagStrings.Duress_EnableHelp]:
      'Detectar señales de angustia en su actividad (ej: palabras clave específicas en commits)',
    [DigitalBurnbagStrings.Duress_KeywordsLabel]: 'Palabras clave de coacción',
    [DigitalBurnbagStrings.Duress_KeywordsHelp]:
      'Palabras que indican coacción cuando se encuentran en su actividad (separadas por comas)',
    [DigitalBurnbagStrings.Duress_PatternsLabel]: 'Patrones de coacción',
    [DigitalBurnbagStrings.Duress_PatternsHelp]:
      'Patrones regex que indican coacción (uno por línea)',

    // -- API Key Entry --
    [DigitalBurnbagStrings.ApiKey_Label]: 'Clave API',
    [DigitalBurnbagStrings.ApiKey_Placeholder]: 'Ingrese su clave API',
    [DigitalBurnbagStrings.ApiKey_Help]:
      'Su clave API será encriptada y almacenada de forma segura',
    [DigitalBurnbagStrings.ApiKey_WhereToFind]: 'Dónde encontrar su clave API',

    // -- Webhook Configuration --
    [DigitalBurnbagStrings.Webhook_UrlLabel]: 'URL del webhook',
    [DigitalBurnbagStrings.Webhook_UrlHelp]:
      'Configure esta URL en su servicio externo',
    [DigitalBurnbagStrings.Webhook_SecretLabel]: 'Secreto del webhook',
    [DigitalBurnbagStrings.Webhook_SecretHelp]:
      'Use este secreto para firmar solicitudes de webhook',
    [DigitalBurnbagStrings.Webhook_Instructions]:
      'Configure su servicio para enviar solicitudes POST a la URL del webhook',
    [DigitalBurnbagStrings.Webhook_CopyUrl]: 'Copiar URL',
    [DigitalBurnbagStrings.Webhook_CopySecret]: 'Copiar secreto',
    [DigitalBurnbagStrings.Webhook_Copied]: 'Copiado al portapapeles',

    // -- Connection Test --
    [DigitalBurnbagStrings.Test_Running]: 'Probando conexión...',
    [DigitalBurnbagStrings.Test_Success]: 'Conexión exitosa',
    [DigitalBurnbagStrings.Test_Failed]: 'Conexión fallida',
    [DigitalBurnbagStrings.Test_ResponseTime]: 'Tiempo de respuesta: {ms}ms',
    [DigitalBurnbagStrings.Test_UserInfo]: 'Conectado como {username}',

    // -- OAuth Flow --
    [DigitalBurnbagStrings.OAuth_Redirecting]: 'Redirigiendo a {provider}...',
    [DigitalBurnbagStrings.OAuth_WaitingForAuth]: 'Esperando autorización...',
    [DigitalBurnbagStrings.OAuth_Success]: 'Autorización exitosa',
    [DigitalBurnbagStrings.OAuth_Failed]: 'Autorización fallida',
    [DigitalBurnbagStrings.OAuth_Cancelled]: 'Autorización cancelada',

    // -- Connection Summary --
    [DigitalBurnbagStrings.Summary_Healthy]:
      'Todos los proveedores están sanos',
    [DigitalBurnbagStrings.Summary_Degraded]:
      'Algunos proveedores necesitan atención',
    [DigitalBurnbagStrings.Summary_Critical]: 'Crítico: proveedores fallando',
    [DigitalBurnbagStrings.Summary_None]: 'Sin proveedores conectados',
    [DigitalBurnbagStrings.Summary_ConnectedProviders]:
      '{count} proveedores conectados',
    [DigitalBurnbagStrings.Summary_NeedsAttention]:
      '{count} necesitan atención',
    [DigitalBurnbagStrings.Summary_LastHeartbeat]: 'Último latido: {time}',

    // -- Provider Dashboard --
    [DigitalBurnbagStrings.Nav_Providers]: 'Proveedores',
    [DigitalBurnbagStrings.Dashboard_Title]: 'Panel de proveedores',
    [DigitalBurnbagStrings.Dashboard_HealthBanner]: 'Resumen de salud',
    [DigitalBurnbagStrings.Dashboard_SignalPresence]: 'Presencia',
    [DigitalBurnbagStrings.Dashboard_SignalAbsence]: 'Ausencia',
    [DigitalBurnbagStrings.Dashboard_SignalDuress]: 'Coacción',
    [DigitalBurnbagStrings.Dashboard_SignalCheckFailed]: 'Verificación fallida',
    [DigitalBurnbagStrings.Dashboard_SignalInconclusive]: 'No concluyente',
    [DigitalBurnbagStrings.Dashboard_TimeSinceActivity]: 'Tiempo desde la última actividad',
    [DigitalBurnbagStrings.Detail_StatusHistory]: 'Historial de estados',
    [DigitalBurnbagStrings.Detail_ConnectionSettings]: 'Configuración de conexión',
    [DigitalBurnbagStrings.Detail_FilterBySignal]: 'Filtrar por señal',
    [DigitalBurnbagStrings.Detail_AllSignals]: 'Todas las señales',
    [DigitalBurnbagStrings.Detail_Timeline]: 'Línea de tiempo',
    [DigitalBurnbagStrings.Detail_NoHistory]: 'No hay historial de estados disponible',
    [DigitalBurnbagStrings.Binding_BindToProvider]: 'Vincular a proveedor',
    [DigitalBurnbagStrings.Binding_SelectProvider]: 'Seleccionar proveedor',
    [DigitalBurnbagStrings.Binding_Condition]: 'Condición',
    [DigitalBurnbagStrings.Binding_Action]: 'Acción',
    [DigitalBurnbagStrings.Binding_Targets]: 'Objetivos',
    [DigitalBurnbagStrings.Binding_Create]: 'Crear vínculo',
    [DigitalBurnbagStrings.Binding_ProviderNotConnected]: 'Este proveedor no está conectado.',
    [DigitalBurnbagStrings.Binding_FixConnection]: 'Reparar conexión',
    [DigitalBurnbagStrings.Binding_DragHint]: 'Arrastre una tarjeta de proveedor a una bóveda o archivo',
    [DigitalBurnbagStrings.CustomProvider_Title]: 'Proveedor personalizado',
    [DigitalBurnbagStrings.CustomProvider_ImportJson]: 'Importar JSON',
    [DigitalBurnbagStrings.CustomProvider_ExportJson]: 'Exportar JSON',
    [DigitalBurnbagStrings.CustomProvider_Name]: 'Nombre del proveedor',
    [DigitalBurnbagStrings.CustomProvider_Description]: 'Descripción',
    [DigitalBurnbagStrings.CustomProvider_BaseUrl]: 'URL base',
    [DigitalBurnbagStrings.CustomProvider_Category]: 'Categoría',
    [DigitalBurnbagStrings.CustomProvider_AuthType]: 'Tipo de autenticación',
    [DigitalBurnbagStrings.CustomProvider_Endpoints]: 'Puntos finales',
    [DigitalBurnbagStrings.CustomProvider_ResponseMapping]: 'Mapeo de respuesta',
    [DigitalBurnbagStrings.CustomProvider_Save]: 'Guardar proveedor',
    // -- Encryption & Access Indicators --
    [DigitalBurnbagStrings.Encryption_AES256]: 'AES-256',
    [DigitalBurnbagStrings.Encryption_Encrypted]: 'Cifrado',
    [DigitalBurnbagStrings.Encryption_EncryptedTooltip]: 'Este archivo está cifrado con AES-256-GCM. Solo los titulares de claves autorizados pueden descifrarlo.',
    [DigitalBurnbagStrings.Encryption_KeyWrapped]: 'Clave envuelta',
    [DigitalBurnbagStrings.Encryption_KeyWrappedTooltip]: 'Su clave de descifrado está envuelta bajo su par de claves ECIES personal. Solo usted puede desenvolverla.',
    [DigitalBurnbagStrings.Encryption_ApprovalProtected]: 'Quórum',
    [DigitalBurnbagStrings.Encryption_ApprovalTooltip]: 'Este archivo requiere aprobación de quórum para operaciones sensibles.',
    [DigitalBurnbagStrings.Access_OnlyYou]: 'Solo tú',
    [DigitalBurnbagStrings.Access_SharedWith]: 'Compartido con',
    [DigitalBurnbagStrings.Access_SharedWithCount]: 'Compartido con {count} personas',
    [DigitalBurnbagStrings.Access_ViewAll]: 'Ver todo el acceso',
    [DigitalBurnbagStrings.Vault_EncryptionLabel]: 'Cifrado',
    [DigitalBurnbagStrings.Vault_AllEncrypted]: 'Todos los archivos cifrados',
    [DigitalBurnbagStrings.Vault_AllEncryptedDesc]: 'Cada archivo en esta bóveda está cifrado con AES-256-GCM.',
    [DigitalBurnbagStrings.FileBrowser_ColAccess]: 'Acceso',
    [DigitalBurnbagStrings.FileBrowser_ColSecurity]: 'Seguridad',

    // -- Friends Sharing --
    [DigitalBurnbagStrings.Friends_SectionTitle]: 'Amigos',
    [DigitalBurnbagStrings.Friends_ShareWithAll]: 'Compartir con amigos',
  };
