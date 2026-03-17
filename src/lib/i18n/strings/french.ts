import { ComponentStrings } from '@digitaldefiance/i18n-lib';
import {
  DigitalBurnbagStringKey,
  DigitalBurnbagStrings,
} from '../../enumerations/digitalburnbag-strings';

export const DigitalBurnbagFrenchStrings: ComponentStrings<DigitalBurnbagStringKey> =
  {
    [DigitalBurnbagStrings.KeyFeatures_1]:
      'Stockez vos fichiers en toute sécurité avec des règles de diffusion ou de suppression automatique.',
    [DigitalBurnbagStrings.KeyFeatures_2]:
      'Créez des « Canaris » pour surveiller votre activité numérique ou physique.',
    [DigitalBurnbagStrings.KeyFeatures_3]:
      "Les actions sont déclenchées en fonction de l'état du canari (ex. : inactivité).",
    [DigitalBurnbagStrings.KeyFeatures_4]:
      "Codes de contrainte pour des actions d'urgence immédiates.",
    [DigitalBurnbagStrings.SiteDescription]:
      "Stockez vos fichiers en toute sécurité avec des règles de diffusion ou de suppression automatique basées sur la surveillance de l'activité numérique et physique.",
    [DigitalBurnbagStrings.SiteTagline]: 'Vos données, vos règles',
    [DigitalBurnbagStrings.Nav_MyFiles]: 'Mes fichiers',
    [DigitalBurnbagStrings.Nav_SharedWithMe]: 'Partagé avec moi',
    [DigitalBurnbagStrings.Nav_Favorites]: 'Favoris',
    [DigitalBurnbagStrings.Nav_Recent]: 'Récents',
    [DigitalBurnbagStrings.Nav_Trash]: 'Corbeille',
    [DigitalBurnbagStrings.Nav_Activity]: 'Activité',
    [DigitalBurnbagStrings.Nav_Analytics]: 'Analytique',
    [DigitalBurnbagStrings.Nav_Canary]: 'Canari',
    [DigitalBurnbagStrings.Nav_Vaults]: 'Coffres',
    [DigitalBurnbagStrings.Nav_FileSections]: 'Sections de fichiers',

    // -- Vault Container --
    [DigitalBurnbagStrings.Vault_Title]: 'Conteneurs de coffre',
    [DigitalBurnbagStrings.Vault_CreateNew]: 'Nouveau coffre',
    [DigitalBurnbagStrings.Vault_NameLabel]: 'Nom du coffre',
    [DigitalBurnbagStrings.Vault_DescriptionLabel]: 'Description',
    [DigitalBurnbagStrings.Vault_Create]: 'Créer',
    [DigitalBurnbagStrings.Vault_Cancel]: 'Annuler',
    [DigitalBurnbagStrings.Vault_Empty]: 'Aucun coffre',
    [DigitalBurnbagStrings.Vault_EmptyDesc]:
      'Créez un coffre pour commencer à stocker des fichiers en toute sécurité.',
    [DigitalBurnbagStrings.Vault_Files]: 'fichiers',
    [DigitalBurnbagStrings.Vault_Folders]: 'dossiers',
    [DigitalBurnbagStrings.Vault_State]: 'État',
    [DigitalBurnbagStrings.Vault_SealStatus]: 'État du sceau',
    [DigitalBurnbagStrings.Vault_AllPristine]: 'Tous intacts',
    [DigitalBurnbagStrings.Vault_SomeAccessed]: 'Certains consultés',
    [DigitalBurnbagStrings.Vault_Open]: 'Ouvrir',
    [DigitalBurnbagStrings.Vault_Lock]: 'Verrouiller',
    [DigitalBurnbagStrings.Vault_Destroy]: 'Détruire',
    [DigitalBurnbagStrings.Vault_CreateFailed]:
      'Échec de la création du coffre',
    [DigitalBurnbagStrings.Vault_LoadFailed]: 'Échec du chargement des coffres',
    [DigitalBurnbagStrings.Vault_Created]: 'Coffre créé',

    [DigitalBurnbagStrings.FileBrowser_ColName]: 'Nom',
    [DigitalBurnbagStrings.FileBrowser_ColSize]: 'Taille',
    [DigitalBurnbagStrings.FileBrowser_ColModified]: 'Modifié',
    [DigitalBurnbagStrings.FileBrowser_ColType]: 'Type',
    [DigitalBurnbagStrings.FileBrowser_EmptyFolder]: 'Ce dossier est vide',
    [DigitalBurnbagStrings.FileBrowser_SelectAll]: 'Tout sélectionner',
    [DigitalBurnbagStrings.FileBrowser_FolderPath]: 'Chemin du dossier',
    [DigitalBurnbagStrings.FileBrowser_Loading]: 'Chargement du contenu',
    [DigitalBurnbagStrings.FileBrowser_TypeFolder]: 'Dossier',
    [DigitalBurnbagStrings.FileBrowser_TypeFile]: 'Fichier',
    [DigitalBurnbagStrings.Action_Rename]: 'Renommer',
    [DigitalBurnbagStrings.Action_Move]: 'Déplacer',
    [DigitalBurnbagStrings.Action_Copy]: 'Copier',
    [DigitalBurnbagStrings.Action_Delete]: 'Supprimer',
    [DigitalBurnbagStrings.Action_Share]: 'Partager',
    [DigitalBurnbagStrings.Action_Download]: 'Télécharger',
    [DigitalBurnbagStrings.Action_Duplicate]: 'Dupliquer',
    [DigitalBurnbagStrings.Action_History]: 'Historique',
    [DigitalBurnbagStrings.Action_Permissions]: 'Autorisations',
    [DigitalBurnbagStrings.Action_Preview]: 'Aperçu',
    [DigitalBurnbagStrings.Action_More]: 'Plus…',
    [DigitalBurnbagStrings.Action_Paste]: 'Coller',
    [DigitalBurnbagStrings.Action_UploadNewVersion]: 'Téléverser une nouvelle version',
    [DigitalBurnbagStrings.Trash_ColName]: 'Nom',
    [DigitalBurnbagStrings.Trash_ColOriginalPath]: 'Chemin original',
    [DigitalBurnbagStrings.Trash_ColDeleted]: 'Supprimé',
    [DigitalBurnbagStrings.Trash_ColTimeRemaining]: 'Temps restant',
    [DigitalBurnbagStrings.Trash_ColActions]: 'Actions',
    [DigitalBurnbagStrings.Trash_Empty]: 'La corbeille est vide',
    [DigitalBurnbagStrings.Trash_Restore]: 'Restaurer',
    [DigitalBurnbagStrings.Trash_DeletePermanently]: 'Supprimer définitivement',
    [DigitalBurnbagStrings.Trash_Loading]: 'Chargement de la corbeille',
    [DigitalBurnbagStrings.Trash_Expired]: 'Expiré',
    [DigitalBurnbagStrings.Trash_DaysRemaining]: '{count} jours',
    [DigitalBurnbagStrings.Trash_HoursRemaining]: '{count} heures',
    [DigitalBurnbagStrings.Share_Title]: 'Partager — {fileName}',
    [DigitalBurnbagStrings.Share_WithUser]: 'Partager avec un utilisateur',
    [DigitalBurnbagStrings.Share_EmailLabel]: 'E-mail',
    [DigitalBurnbagStrings.Share_PermView]: 'Lecture',
    [DigitalBurnbagStrings.Share_PermEdit]: 'Édition',
    [DigitalBurnbagStrings.Share_Button]: 'Partager',
    [DigitalBurnbagStrings.Share_AdvancedOptions]:
      'Options de partage avancées',
    [DigitalBurnbagStrings.Share_EncryptionMode]: 'Mode de chiffrement',
    [DigitalBurnbagStrings.Share_ServerProxied]: 'proxy serveur',
    [DigitalBurnbagStrings.Share_ServerProxiedDesc]:
      'Le serveur déchiffre pour le destinataire. Option la plus simple.',
    [DigitalBurnbagStrings.Share_EphemeralKeyPair]: 'paire de clés éphémère',
    [DigitalBurnbagStrings.Share_EphemeralKeyPairDesc]:
      'Génère une paire de clés unique. La clé privée est dans le fragment URL (jamais envoyée au serveur).',
    [DigitalBurnbagStrings.Share_RecipientPublicKey]:
      'clé publique du destinataire',
    [DigitalBurnbagStrings.Share_RecipientPublicKeyDesc]:
      'Chiffre avec la clé publique du destinataire. Le plus sécurisé pour les destinataires connus.',
    [DigitalBurnbagStrings.Share_RecipientKeyLabel]:
      'Clé publique du destinataire',
    [DigitalBurnbagStrings.Share_PasswordLabel]: 'Mot de passe (optionnel)',
    [DigitalBurnbagStrings.Share_ExpiresAtLabel]: 'Expire le',
    [DigitalBurnbagStrings.Share_MaxAccessLabel]: "Nombre maximum d'accès",
    [DigitalBurnbagStrings.Share_ScopeLabel]: 'Portée du lien',
    [DigitalBurnbagStrings.Share_ScopeSpecific]: 'Personnes spécifiques',
    [DigitalBurnbagStrings.Share_ScopeOrganization]: 'Organisation',
    [DigitalBurnbagStrings.Share_ScopeAnonymous]: 'Anonyme',
    [DigitalBurnbagStrings.Share_BlockDownload]:
      'Bloquer le téléchargement (aperçu uniquement)',
    [DigitalBurnbagStrings.Share_CreateLink]: 'Créer un lien de partage',
    [DigitalBurnbagStrings.Share_MagnetWarning]:
      "Les URL magnet sont irrévocables. Une fois partagé, le fichier est accessible à toute personne disposant de l'URL.",
    [DigitalBurnbagStrings.Share_GetMagnetUrl]: 'Obtenir URL magnet',
    [DigitalBurnbagStrings.Share_Close]: 'Fermer',
    [DigitalBurnbagStrings.Share_Failed]: 'Échec du partage',
    [DigitalBurnbagStrings.Share_LinkFailed]: 'Échec de la création du lien',
    [DigitalBurnbagStrings.Share_MagnetFailed]:
      "Échec de l'obtention de l'URL magnet",
    [DigitalBurnbagStrings.Upload_DropOrBrowse]:
      'Déposez des fichiers ici ou cliquez pour parcourir',
    [DigitalBurnbagStrings.Upload_DropZoneLabel]: 'Zone de dépôt de fichiers',
    [DigitalBurnbagStrings.Upload_Failed]: 'Échec du téléversement',

    // -- Upload New Version --
    [DigitalBurnbagStrings.Upload_NewVersion]: 'Téléverser une nouvelle version',
    [DigitalBurnbagStrings.Upload_NewVersionTitle]: 'Téléverser une nouvelle version',
    [DigitalBurnbagStrings.Upload_NewVersionDesc]:
      'Sélectionnez un fichier à téléverser comme nouvelle version. Le fichier doit être du même type que l\'original.',
    [DigitalBurnbagStrings.Upload_NewVersionSelect]: 'Sélectionner un fichier',
    [DigitalBurnbagStrings.Upload_NewVersionUploading]:
      'Téléversement de la nouvelle version…',
    [DigitalBurnbagStrings.Upload_NewVersionSuccess]:
      'Nouvelle version téléversée avec succès',
    [DigitalBurnbagStrings.Upload_NewVersionFailed]:
      'Échec du téléversement de la nouvelle version',
    [DigitalBurnbagStrings.Upload_NewVersionMimeTypeMismatch]:
      'Type de fichier incompatible : attendu {expected} mais reçu {actual}',

    [DigitalBurnbagStrings.Preview_CloseLabel]: "Fermer l'aperçu",
    [DigitalBurnbagStrings.Preview_Download]: 'Télécharger',
    [DigitalBurnbagStrings.Preview_Close]: 'Fermer',
    [DigitalBurnbagStrings.Preview_TypeLabel]: 'Type : {mimeType}',
    [DigitalBurnbagStrings.Preview_NotAvailable]:
      'Aperçu non disponible pour ce type de fichier.',
    [DigitalBurnbagStrings.Preview_VideoNotSupported]:
      'Votre navigateur ne prend pas en charge la lecture vidéo.',
    [DigitalBurnbagStrings.Preview_LoadFailed]:
      'Échec du chargement du contenu',
    [DigitalBurnbagStrings.Bulk_ItemsSelected]: '{count} éléments sélectionnés',
    [DigitalBurnbagStrings.Bulk_ClearSelection]: 'Effacer la sélection',
    [DigitalBurnbagStrings.Bulk_Succeeded]: '{count} réussis',
    [DigitalBurnbagStrings.Bulk_Failed]: '{count} échoués',
    [DigitalBurnbagStrings.ACL_ColPrincipal]: 'Principal',
    [DigitalBurnbagStrings.ACL_ColType]: 'Type',
    [DigitalBurnbagStrings.ACL_ColPermission]: 'Autorisation',
    [DigitalBurnbagStrings.ACL_ColActions]: 'Actions',
    [DigitalBurnbagStrings.ACL_Remove]: 'Supprimer',
    [DigitalBurnbagStrings.ACL_Add]: 'Ajouter',
    [DigitalBurnbagStrings.ACL_UserOrGroupPlaceholder]:
      'ID utilisateur ou groupe',
    [DigitalBurnbagStrings.ACL_InheritedFrom]: 'Hérité de {source}',
    [DigitalBurnbagStrings.ACL_AdvancedPermissions]: 'Autorisations avancées',
    [DigitalBurnbagStrings.ACL_PermissionFlags]: 'Indicateurs de permission',
    [DigitalBurnbagStrings.ACL_PermissionSetName]: 'Nom du jeu de permissions',
    [DigitalBurnbagStrings.ACL_CreateSet]: 'Créer un jeu',
    [DigitalBurnbagStrings.ACL_CustomSets]: 'Jeux de permissions personnalisés',
    [DigitalBurnbagStrings.ACL_Mixed]: 'Mixte',
    [DigitalBurnbagStrings.ACL_MixedTooltip]:
      'Tous les éléments sélectionnés ne partagent pas cette permission',
    [DigitalBurnbagStrings.ACL_ApplyToAll]:
      'Appliquer à tous les éléments sélectionnés',
    [DigitalBurnbagStrings.ACL_MultiItemTitle]:
      'Permissions — {count} éléments',
    [DigitalBurnbagStrings.ACL_SaveFailed]:
      "Échec de l'enregistrement des permissions",
    [DigitalBurnbagStrings.ACL_Saved]: 'Permissions enregistrées',
    [DigitalBurnbagStrings.Canary_Bindings]: 'Liaisons canari',
    [DigitalBurnbagStrings.Canary_AddBinding]: 'Ajouter une liaison',
    [DigitalBurnbagStrings.Canary_ColCondition]: 'Condition',
    [DigitalBurnbagStrings.Canary_ColAction]: 'Action',
    [DigitalBurnbagStrings.Canary_ColTarget]: 'Cible',
    [DigitalBurnbagStrings.Canary_ColActions]: 'Actions',
    [DigitalBurnbagStrings.Canary_NoBindings]: 'Aucune liaison configurée',
    [DigitalBurnbagStrings.Canary_DryRun]: 'Simulation',
    [DigitalBurnbagStrings.Canary_DeleteBinding]: 'Supprimer la liaison',
    [DigitalBurnbagStrings.Canary_NewBinding]: 'Nouvelle liaison',
    [DigitalBurnbagStrings.Canary_ProviderLabel]: 'Fournisseur',
    [DigitalBurnbagStrings.Canary_TargetIdsLabel]:
      'IDs cibles (séparés par des virgules)',
    [DigitalBurnbagStrings.Canary_NoRecipientList]:
      'Aucune liste de destinataires',
    [DigitalBurnbagStrings.Canary_CascadeDelayLabel]:
      'Délai en cascade (secondes)',
    [DigitalBurnbagStrings.Canary_Create]: 'Créer',
    [DigitalBurnbagStrings.Canary_Cancel]: 'Annuler',
    [DigitalBurnbagStrings.Canary_RecipientLists]: 'Listes de destinataires',
    [DigitalBurnbagStrings.Canary_AddList]: 'Ajouter une liste',
    [DigitalBurnbagStrings.Canary_ColListName]: 'Nom',
    [DigitalBurnbagStrings.Canary_ColRecipients]: 'Destinataires',
    [DigitalBurnbagStrings.Canary_NoLists]: 'Aucune liste de destinataires',
    [DigitalBurnbagStrings.Canary_NewList]: 'Nouvelle liste de destinataires',
    [DigitalBurnbagStrings.Canary_ListNameLabel]: 'Nom de la liste',
    [DigitalBurnbagStrings.Canary_RecipientsLabel]:
      'Destinataires (un par ligne : e-mail, libellé)',
    [DigitalBurnbagStrings.Canary_DryRunReport]: 'Rapport de simulation',
    [DigitalBurnbagStrings.Canary_AffectedFiles]: 'Fichiers affectés : {count}',
    [DigitalBurnbagStrings.Canary_RecipientsCount]: 'Destinataires : {count}',
    [DigitalBurnbagStrings.Canary_ActionsLabel]: 'Actions :',
    [DigitalBurnbagStrings.Notifications_Label]: 'Notifications',
    [DigitalBurnbagStrings.Notifications_Empty]: 'Aucune notification',
    [DigitalBurnbagStrings.Activity_AllOperations]: 'Toutes les opérations',
    [DigitalBurnbagStrings.Activity_NoActivity]: 'Aucune activité à afficher',
    [DigitalBurnbagStrings.Activity_OnTarget]: '{actor} sur {target}',
    [DigitalBurnbagStrings.Analytics_StorageUsage]: 'Utilisation du stockage',
    [DigitalBurnbagStrings.Analytics_UsageSummary]:
      '{used} sur {quota} utilisé ({percent} %)',
    [DigitalBurnbagStrings.Analytics_ByFileType]: 'Par type de fichier',
    [DigitalBurnbagStrings.Analytics_ColCategory]: 'Catégorie',
    [DigitalBurnbagStrings.Analytics_ColFiles]: 'Fichiers',
    [DigitalBurnbagStrings.Analytics_ColSize]: 'Taille',
    [DigitalBurnbagStrings.Analytics_LargestItems]:
      'Éléments les plus volumineux',
    [DigitalBurnbagStrings.Analytics_ColName]: 'Nom',
    [DigitalBurnbagStrings.Analytics_ColItemActions]: 'Actions',
    [DigitalBurnbagStrings.Analytics_Trash]: 'Corbeille',
    [DigitalBurnbagStrings.Analytics_StaleFiles]: 'Fichiers obsolètes',
    [DigitalBurnbagStrings.Analytics_ColAge]: 'Âge',
    [DigitalBurnbagStrings.Analytics_AgeDays]: '{count} jours',
    [DigitalBurnbagStrings.Analytics_ScheduleDestroy]:
      'Planifier la destruction',
    [DigitalBurnbagStrings.Page_ItemMoved]: 'Élément déplacé',
    [DigitalBurnbagStrings.Page_MoveFailed]:
      "Échec du déplacement de l'élément",
    [DigitalBurnbagStrings.Page_LoadFolderFailed]:
      'Échec du chargement du dossier',
    [DigitalBurnbagStrings.Page_LoadTrashFailed]:
      'Échec du chargement de la corbeille',
    [DigitalBurnbagStrings.Page_LoadSharedFailed]:
      'Échec du chargement des éléments partagés',
    [DigitalBurnbagStrings.Page_LoadCanaryFailed]:
      'Échec du chargement de la configuration canari',
    [DigitalBurnbagStrings.Page_LoadActivityFailed]:
      "Échec du chargement de l'activité",
    [DigitalBurnbagStrings.Page_LoadAnalyticsFailed]:
      "Échec du chargement de l'analytique de stockage",
    [DigitalBurnbagStrings.Page_LoadPermissionsFailed]:
      'Échec du chargement des autorisations',
    [DigitalBurnbagStrings.Page_DeleteFailed]: 'Échec de la suppression',
    [DigitalBurnbagStrings.Page_RenameFailed]: 'Échec du renommage',
    [DigitalBurnbagStrings.Page_Renamed]: 'Renommé',
    [DigitalBurnbagStrings.Page_ItemsMovedToTrash]:
      '{count} éléments déplacés dans la corbeille',
    [DigitalBurnbagStrings.Page_Restored]: '{name} restauré',
    [DigitalBurnbagStrings.Page_PermanentlyDeleted]:
      '{name} supprimé définitivement',
    [DigitalBurnbagStrings.Page_RestoreFailed]: 'Échec de la restauration',
    [DigitalBurnbagStrings.Page_PermanentDeleteFailed]:
      'Échec de la suppression définitive',
    [DigitalBurnbagStrings.Page_BindingCreated]: 'Liaison créée',
    [DigitalBurnbagStrings.Page_BindingDeleted]: 'Liaison supprimée',
    [DigitalBurnbagStrings.Page_RecipientListCreated]:
      'Liste de destinataires créée',
    [DigitalBurnbagStrings.Page_UserNotFound]: 'Utilisateur introuvable',
    [DigitalBurnbagStrings.Page_PathNotFound]:
      'Le chemin du dossier est introuvable. Il a peut-être été déplacé ou supprimé.',
    [DigitalBurnbagStrings.Page_NoFileSelected]: 'Aucun fichier sélectionné',
    [DigitalBurnbagStrings.Page_UploadFailed]: 'Échec du téléversement',
    [DigitalBurnbagStrings.Page_ErrorOccurred]: 'Une erreur est survenue',
    [DigitalBurnbagStrings.Page_RenamePrompt]: 'Nouveau nom :',

    // -- Phix (cycle phénix de renommage) --
    [DigitalBurnbagStrings.Phix_Button]: 'Phix',
    [DigitalBurnbagStrings.Phix_Tooltip]:
      "Renommage par cycle phénix : détruire l'ancien nom, renaître avec le nouveau",
    [DigitalBurnbagStrings.Phix_Confirm_Title]: "Confirmer l'opération Phix",
    [DigitalBurnbagStrings.Phix_Confirm_MetadataOnly]:
      'Renommage des métadonnées uniquement. Aucun bloc ne sera touché. Rapide et indolore.',
    [DigitalBurnbagStrings.Phix_Confirm_FullCycle]:
      "Cycle phénix complet. Les données seront rechiffrées et l'original détruit. Cela peut prendre du temps.",
    [DigitalBurnbagStrings.Phix_Progress]: 'Phix en cours…',
    [DigitalBurnbagStrings.Phix_Complete]:
      'Phix terminé — renaît de ses cendres',
    [DigitalBurnbagStrings.Phix_Failed]: 'Échec du Phix',
    [DigitalBurnbagStrings.Phix_Mascot_Tiny]: 'phix-mascot-tiny',
    [DigitalBurnbagStrings.Phix_Mascot_Small]: 'phix-mascot-small',
    [DigitalBurnbagStrings.Phix_Mascot_Medium]: 'phix-mascot-medium',
    [DigitalBurnbagStrings.Phix_Mascot_Large]: 'phix-mascot-large',
    [DigitalBurnbagStrings.Phix_Mascot_Massive]: 'phix-mascot-massive',

    [DigitalBurnbagStrings.Common_Close]: 'Fermer',
    [DigitalBurnbagStrings.Common_Save]: 'Enregistrer',
    [DigitalBurnbagStrings.Common_Back]: 'Retour',
    [DigitalBurnbagStrings.Common_Next]: 'Suivant',
    [DigitalBurnbagStrings.Common_Finish]: 'Terminer',
    [DigitalBurnbagStrings.Common_Test]: 'Tester',
    [DigitalBurnbagStrings.Common_Connect]: 'Connecter',
    [DigitalBurnbagStrings.Common_Disconnect]: 'Déconnecter',
    [DigitalBurnbagStrings.Common_Retry]: 'Réessayer',
    [DigitalBurnbagStrings.Common_Enable]: 'Activer',
    [DigitalBurnbagStrings.Common_Disable]: 'Désactiver',
    [DigitalBurnbagStrings.Common_Loading]: 'Chargement...',
    [DigitalBurnbagStrings.Common_Error]: 'Erreur',
    [DigitalBurnbagStrings.Common_Success]: 'Succès',

    // -- Provider Registration --
    [DigitalBurnbagStrings.Provider_Title]: 'Fournisseurs Canari',
    [DigitalBurnbagStrings.Provider_Subtitle]:
      'Connectez des services pour surveiller votre activité et déclencher des actions de sécurité',
    [DigitalBurnbagStrings.Provider_MyConnections]: 'Mes connexions',
    [DigitalBurnbagStrings.Provider_AddProvider]: 'Ajouter un fournisseur',
    [DigitalBurnbagStrings.Provider_NoConnections]:
      'Aucun fournisseur connecté',
    [DigitalBurnbagStrings.Provider_NoConnectionsDesc]:
      'Connectez un fournisseur pour commencer à surveiller votre activité',
    [DigitalBurnbagStrings.Provider_SearchPlaceholder]:
      'Rechercher des fournisseurs...',
    [DigitalBurnbagStrings.Provider_FilterByCategory]: 'Filtrer par catégorie',
    [DigitalBurnbagStrings.Provider_AllCategories]: 'Toutes les catégories',
    [DigitalBurnbagStrings.Provider_LastChecked]:
      'Dernière vérification : {time}',
    [DigitalBurnbagStrings.Provider_LastActivity]: 'Dernière activité : {time}',
    [DigitalBurnbagStrings.Provider_NeverChecked]: 'Jamais vérifié',
    [DigitalBurnbagStrings.Provider_CheckNow]: 'Vérifier maintenant',
    [DigitalBurnbagStrings.Provider_Settings]: 'Paramètres',
    [DigitalBurnbagStrings.Provider_ViewDetails]: 'Voir les détails',

    // -- Provider Status --
    [DigitalBurnbagStrings.ProviderStatus_Connected]: 'Connecté',
    [DigitalBurnbagStrings.ProviderStatus_Pending]: 'En attente',
    [DigitalBurnbagStrings.ProviderStatus_Expired]: 'Expiré',
    [DigitalBurnbagStrings.ProviderStatus_Invalid]: 'Invalide',
    [DigitalBurnbagStrings.ProviderStatus_Error]: 'Erreur',
    [DigitalBurnbagStrings.ProviderStatus_NotConnected]: 'Non connecté',

    // -- Provider Categories --
    [DigitalBurnbagStrings.ProviderCategory_PlatformNative]:
      'Natif de la plateforme',
    [DigitalBurnbagStrings.ProviderCategory_PlatformNativeDesc]:
      'Méthodes de vérification intégrées sans services externes',
    [DigitalBurnbagStrings.ProviderCategory_HealthFitness]: 'Santé et forme',
    [DigitalBurnbagStrings.ProviderCategory_HealthFitnessDesc]:
      'Trackers de fitness et applications de santé',
    [DigitalBurnbagStrings.ProviderCategory_Developer]:
      'Outils de développement',
    [DigitalBurnbagStrings.ProviderCategory_DeveloperDesc]:
      'Dépôts de code et plateformes de développement',
    [DigitalBurnbagStrings.ProviderCategory_Communication]: 'Communication',
    [DigitalBurnbagStrings.ProviderCategory_CommunicationDesc]:
      'Plateformes de messagerie et de chat',
    [DigitalBurnbagStrings.ProviderCategory_SocialMedia]: 'Réseaux sociaux',
    [DigitalBurnbagStrings.ProviderCategory_SocialMediaDesc]:
      'Réseaux sociaux et plateformes de contenu',
    [DigitalBurnbagStrings.ProviderCategory_Productivity]: 'Productivité',
    [DigitalBurnbagStrings.ProviderCategory_ProductivityDesc]:
      'E-mail, calendrier et outils de productivité',
    [DigitalBurnbagStrings.ProviderCategory_SmartHome]: 'Maison intelligente',
    [DigitalBurnbagStrings.ProviderCategory_SmartHomeDesc]:
      'Appareils IoT et domotique',
    [DigitalBurnbagStrings.ProviderCategory_Gaming]: 'Jeux',
    [DigitalBurnbagStrings.ProviderCategory_GamingDesc]:
      'Plateformes et services de jeux',
    [DigitalBurnbagStrings.ProviderCategory_Financial]: 'Finance',
    [DigitalBurnbagStrings.ProviderCategory_FinancialDesc]:
      'Services bancaires et financiers',
    [DigitalBurnbagStrings.ProviderCategory_Email]: 'E-mail',
    [DigitalBurnbagStrings.ProviderCategory_EmailDesc]:
      'Fournisseurs de messagerie',
    [DigitalBurnbagStrings.ProviderCategory_CustomIntegration]:
      'Intégration personnalisée',
    [DigitalBurnbagStrings.ProviderCategory_CustomIntegrationDesc]:
      "Créez votre propre intégration avec n'importe quel service",
    [DigitalBurnbagStrings.ProviderCategory_Other]: 'Autre',
    [DigitalBurnbagStrings.ProviderCategory_OtherDesc]: 'Autres fournisseurs',

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
    [DigitalBurnbagStrings.ProviderName_CustomWebhook]: 'Webhook personnalisé',
    [DigitalBurnbagStrings.ProviderName_BrightChain]: 'Activité BrightChain',
    [DigitalBurnbagStrings.ProviderName_ManualCheckin]: 'Vérification manuelle',
    [DigitalBurnbagStrings.ProviderName_EmailPing]: 'Vérification par e-mail',
    [DigitalBurnbagStrings.ProviderName_SmsPing]: 'Vérification par SMS',

    // -- Provider Descriptions --
    [DigitalBurnbagStrings.ProviderDesc_Fitbit]:
      'Suivez les pas, la fréquence cardiaque et le sommeil comme preuve de vie',
    [DigitalBurnbagStrings.ProviderDesc_Strava]:
      'Surveillez vos courses, sorties vélo et entraînements',
    [DigitalBurnbagStrings.ProviderDesc_Garmin]:
      "Suivez l'activité des appareils Garmin",
    [DigitalBurnbagStrings.ProviderDesc_Whoop]:
      "Surveillez les données de récupération et d'effort",
    [DigitalBurnbagStrings.ProviderDesc_Oura]:
      'Suivez le sommeil et les scores de préparation',
    [DigitalBurnbagStrings.ProviderDesc_GitHub]:
      'Surveillez les commits, issues et pull requests',
    [DigitalBurnbagStrings.ProviderDesc_GitLab]:
      'Surveillez les commits et merge requests',
    [DigitalBurnbagStrings.ProviderDesc_Bitbucket]:
      'Surveillez les commits et pull requests',
    [DigitalBurnbagStrings.ProviderDesc_Twitter]:
      "Surveillez les tweets et l'activité",
    [DigitalBurnbagStrings.ProviderDesc_Mastodon]:
      "Surveillez les toots sur n'importe quelle instance Mastodon",
    [DigitalBurnbagStrings.ProviderDesc_Bluesky]:
      'Surveillez les posts sur Bluesky',
    [DigitalBurnbagStrings.ProviderDesc_Reddit]:
      'Surveillez les posts et commentaires',
    [DigitalBurnbagStrings.ProviderDesc_Slack]:
      "Surveillez la présence et le statut d'activité",
    [DigitalBurnbagStrings.ProviderDesc_Discord]:
      "Surveillez la présence et l'activité",
    [DigitalBurnbagStrings.ProviderDesc_Telegram]:
      "Surveillez l'activité via l'intégration bot",
    [DigitalBurnbagStrings.ProviderDesc_Google]:
      "Surveillez l'activité Gmail et Calendrier",
    [DigitalBurnbagStrings.ProviderDesc_Notion]:
      "Surveillez l'activité de l'espace de travail",
    [DigitalBurnbagStrings.ProviderDesc_HomeAssistant]:
      "Surveillez l'activité de la maison intelligente et la présence",
    [DigitalBurnbagStrings.ProviderDesc_Steam]: "Surveillez l'activité de jeu",
    [DigitalBurnbagStrings.ProviderDesc_CustomWebhook]:
      "Intégrez n'importe quel service pouvant envoyer des requêtes HTTP",
    [DigitalBurnbagStrings.ProviderDesc_BrightChain]:
      'Surveillez votre activité sur cette plateforme',
    [DigitalBurnbagStrings.ProviderDesc_ManualCheckin]:
      'Confirmez manuellement votre présence périodiquement',
    [DigitalBurnbagStrings.ProviderDesc_EmailPing]:
      'Répondez aux défis périodiques par e-mail',
    [DigitalBurnbagStrings.ProviderDesc_SmsPing]:
      'Répondez aux défis périodiques par SMS',

    // -- Provider Data Access Descriptions --
    [DigitalBurnbagStrings.ProviderDataAccess_Fitbit]:
      "Nous accédons à votre résumé d'activité quotidienne (pas, minutes actives), données de fréquence cardiaque et journaux de sommeil.",
    [DigitalBurnbagStrings.ProviderDataAccess_Strava]:
      "Nous accédons à votre flux d'activité pour détecter vos courses, sorties vélo ou autres entraînements.",
    [DigitalBurnbagStrings.ProviderDataAccess_Garmin]:
      "Nous accédons à vos données d'activité Garmin incluant entraînements, pas et métriques de santé.",
    [DigitalBurnbagStrings.ProviderDataAccess_Whoop]:
      "Nous accédons à vos scores de récupération et données d'effort WHOOP.",
    [DigitalBurnbagStrings.ProviderDataAccess_Oura]:
      'Nous accédons à vos données de sommeil et scores de préparation Oura.',
    [DigitalBurnbagStrings.ProviderDataAccess_GitHub]:
      "Nous accédons à votre flux d'activité public incluant commits, issues, pull requests et commentaires.",
    [DigitalBurnbagStrings.ProviderDataAccess_GitLab]:
      'Nous accédons à votre activité GitLab incluant commits, merge requests et issues.',
    [DigitalBurnbagStrings.ProviderDataAccess_Bitbucket]:
      'Nous accédons à votre activité Bitbucket incluant commits et pull requests.',
    [DigitalBurnbagStrings.ProviderDataAccess_Twitter]:
      'Nous accédons à vos tweets récents pour vérifier votre activité continue.',
    [DigitalBurnbagStrings.ProviderDataAccess_Mastodon]:
      'Nous accédons à vos toots récents pour vérifier votre activité continue.',
    [DigitalBurnbagStrings.ProviderDataAccess_Bluesky]:
      'Nous accédons à vos posts récents pour vérifier votre activité continue.',
    [DigitalBurnbagStrings.ProviderDataAccess_Reddit]:
      'Nous accédons à vos posts et commentaires récents pour vérifier votre activité continue.',
    [DigitalBurnbagStrings.ProviderDataAccess_Slack]:
      'Nous accédons à votre statut de présence Slack pour vérifier que vous êtes actif.',
    [DigitalBurnbagStrings.ProviderDataAccess_Discord]:
      'Nous accédons à votre statut de présence Discord pour vérifier que vous êtes actif.',
    [DigitalBurnbagStrings.ProviderDataAccess_Telegram]:
      'Nous utilisons un bot Telegram pour recevoir vos messages de vérification.',
    [DigitalBurnbagStrings.ProviderDataAccess_Google]:
      "Nous accédons aux horodatages de vos messages Gmail (pas au contenu) pour vérifier l'activité récente.",
    [DigitalBurnbagStrings.ProviderDataAccess_Notion]:
      "Nous accédons à l'activité de votre espace de travail Notion pour vérifier les modifications récentes.",
    [DigitalBurnbagStrings.ProviderDataAccess_HomeAssistant]:
      'Nous accédons à votre Home Assistant pour détecter les mouvements, capteurs de porte et autres indicateurs de présence.',
    [DigitalBurnbagStrings.ProviderDataAccess_Steam]:
      "Nous accédons à votre profil Steam pour détecter l'activité de jeu récente.",
    [DigitalBurnbagStrings.ProviderDataAccess_CustomWebhook]:
      'Vous configurez un service externe pour nous envoyer des webhooks de battement de cœur.',
    [DigitalBurnbagStrings.ProviderDataAccess_BrightChain]:
      'Nous suivons automatiquement vos connexions, accès aux fichiers et autres activités sur BrightChain.',
    [DigitalBurnbagStrings.ProviderDataAccess_ManualCheckin]:
      "Vous vous enregistrez manuellement via l'application ou le site web pour confirmer que vous allez bien.",
    [DigitalBurnbagStrings.ProviderDataAccess_EmailPing]:
      'Nous vous envoyons des e-mails périodiques avec un lien de vérification. Cliquez sur le lien pour confirmer.',
    [DigitalBurnbagStrings.ProviderDataAccess_SmsPing]:
      'Nous vous envoyons des SMS périodiques. Répondez pour confirmer que vous allez bien.',

    // -- Provider Check Intervals --
    [DigitalBurnbagStrings.ProviderInterval_EveryMinute]: 'Chaque minute',
    [DigitalBurnbagStrings.ProviderInterval_Every5Minutes]:
      'Toutes les 5 minutes',
    [DigitalBurnbagStrings.ProviderInterval_Every15Minutes]:
      'Toutes les 15 minutes',
    [DigitalBurnbagStrings.ProviderInterval_Every30Minutes]:
      'Toutes les 30 minutes',
    [DigitalBurnbagStrings.ProviderInterval_EveryHour]: 'Toutes les heures',
    [DigitalBurnbagStrings.ProviderInterval_Every2Hours]: 'Toutes les 2 heures',
    [DigitalBurnbagStrings.ProviderInterval_Every4Hours]: 'Toutes les 4 heures',
    [DigitalBurnbagStrings.ProviderInterval_Daily]: 'Quotidien',
    [DigitalBurnbagStrings.ProviderInterval_Weekly]: 'Hebdomadaire',
    [DigitalBurnbagStrings.ProviderInterval_BiWeekly]:
      'Toutes les deux semaines',
    [DigitalBurnbagStrings.ProviderInterval_Monthly]: 'Mensuel',
    [DigitalBurnbagStrings.ProviderInterval_Manual]: 'Vérification manuelle',
    [DigitalBurnbagStrings.ProviderInterval_Automatic]: 'Automatique',
    [DigitalBurnbagStrings.ProviderInterval_Custom]: 'Personnalisé',

    // -- Registration Wizard --
    [DigitalBurnbagStrings.Wizard_SelectProvider]:
      'Sélectionner un fournisseur',
    [DigitalBurnbagStrings.Wizard_SelectProviderDesc]:
      "Choisissez un service à connecter pour la surveillance d'activité",
    [DigitalBurnbagStrings.Wizard_ReviewPermissions]:
      'Vérifier les permissions',
    [DigitalBurnbagStrings.Wizard_ReviewPermissionsDesc]:
      'Vérifiez les données auxquelles nous accéderons depuis ce fournisseur',
    [DigitalBurnbagStrings.Wizard_ConfigureAbsence]:
      "Configurer la détection d'absence",
    [DigitalBurnbagStrings.Wizard_ConfigureAbsenceDesc]:
      "Définissez la durée d'inactivité avant de déclencher votre interrupteur de sécurité",
    [DigitalBurnbagStrings.Wizard_ConfigureDuress]:
      'Configurer la détection de contrainte',
    [DigitalBurnbagStrings.Wizard_ConfigureDuressDesc]:
      'Configurez des mots-clés ou motifs indiquant que vous êtes sous contrainte',
    [DigitalBurnbagStrings.Wizard_Authorize]: 'Autoriser',
    [DigitalBurnbagStrings.Wizard_AuthorizeDesc]:
      "Accordez l'accès à votre compte sur ce fournisseur",
    [DigitalBurnbagStrings.Wizard_EnterApiKey]: 'Entrer la clé API',
    [DigitalBurnbagStrings.Wizard_EnterApiKeyDesc]:
      'Entrez votre clé API pour connecter ce fournisseur',
    [DigitalBurnbagStrings.Wizard_ConfigureWebhook]: 'Configurer le webhook',
    [DigitalBurnbagStrings.Wizard_ConfigureWebhookDesc]:
      "Configurez un webhook pour recevoir les mises à jour d'activité",
    [DigitalBurnbagStrings.Wizard_TestConnection]: 'Tester la connexion',
    [DigitalBurnbagStrings.Wizard_TestConnectionDesc]:
      'Vérifiez que la connexion fonctionne correctement',
    [DigitalBurnbagStrings.Wizard_Complete]: 'Terminé',
    [DigitalBurnbagStrings.Wizard_CompleteDesc]:
      'Fournisseur connecté avec succès',

    // -- Absence Configuration --
    [DigitalBurnbagStrings.Absence_ThresholdLabel]: "Seuil d'absence",
    [DigitalBurnbagStrings.Absence_ThresholdHelp]:
      "Durée sans activité avant de déclencher l'interrupteur de sécurité",
    [DigitalBurnbagStrings.Absence_GracePeriodLabel]: 'Période de grâce',
    [DigitalBurnbagStrings.Absence_GracePeriodHelp]:
      "Temps supplémentaire après le seuil avant l'exécution des actions",
    [DigitalBurnbagStrings.Absence_SendWarnings]:
      "Envoyer des notifications d'avertissement",
    [DigitalBurnbagStrings.Absence_WarningDaysLabel]:
      "Jours d'avertissement avant le seuil",
    [DigitalBurnbagStrings.Absence_WarningDaysHelp]:
      'Jours avant le seuil pour envoyer des avertissements (séparés par des virgules)',
    [DigitalBurnbagStrings.Absence_Days]: 'jours',
    [DigitalBurnbagStrings.Absence_Hours]: 'heures',

    // -- Duress Configuration --
    [DigitalBurnbagStrings.Duress_EnableLabel]:
      'Activer la détection de contrainte',
    [DigitalBurnbagStrings.Duress_EnableHelp]:
      'Détecter les signaux de détresse dans votre activité (ex: mots-clés spécifiques dans les commits)',
    [DigitalBurnbagStrings.Duress_KeywordsLabel]: 'Mots-clés de contrainte',
    [DigitalBurnbagStrings.Duress_KeywordsHelp]:
      "Mots indiquant une contrainte lorsqu'ils sont trouvés dans votre activité (séparés par des virgules)",
    [DigitalBurnbagStrings.Duress_PatternsLabel]: 'Motifs de contrainte',
    [DigitalBurnbagStrings.Duress_PatternsHelp]:
      'Motifs regex indiquant une contrainte (un par ligne)',

    // -- API Key Entry --
    [DigitalBurnbagStrings.ApiKey_Label]: 'Clé API',
    [DigitalBurnbagStrings.ApiKey_Placeholder]: 'Entrez votre clé API',
    [DigitalBurnbagStrings.ApiKey_Help]:
      'Votre clé API sera chiffrée et stockée en toute sécurité',
    [DigitalBurnbagStrings.ApiKey_WhereToFind]: 'Où trouver votre clé API',

    // -- Webhook Configuration --
    [DigitalBurnbagStrings.Webhook_UrlLabel]: 'URL du webhook',
    [DigitalBurnbagStrings.Webhook_UrlHelp]:
      'Configurez cette URL dans votre service externe',
    [DigitalBurnbagStrings.Webhook_SecretLabel]: 'Secret du webhook',
    [DigitalBurnbagStrings.Webhook_SecretHelp]:
      'Utilisez ce secret pour signer les requêtes webhook',
    [DigitalBurnbagStrings.Webhook_Instructions]:
      "Configurez votre service pour envoyer des requêtes POST à l'URL du webhook",
    [DigitalBurnbagStrings.Webhook_CopyUrl]: "Copier l'URL",
    [DigitalBurnbagStrings.Webhook_CopySecret]: 'Copier le secret',
    [DigitalBurnbagStrings.Webhook_Copied]: 'Copié dans le presse-papiers',

    // -- Connection Test --
    [DigitalBurnbagStrings.Test_Running]: 'Test de connexion en cours...',
    [DigitalBurnbagStrings.Test_Success]: 'Connexion réussie',
    [DigitalBurnbagStrings.Test_Failed]: 'Échec de la connexion',
    [DigitalBurnbagStrings.Test_ResponseTime]: 'Temps de réponse : {ms}ms',
    [DigitalBurnbagStrings.Test_UserInfo]: 'Connecté en tant que {username}',

    // -- OAuth Flow --
    [DigitalBurnbagStrings.OAuth_Redirecting]: 'Redirection vers {provider}...',
    [DigitalBurnbagStrings.OAuth_WaitingForAuth]:
      "En attente d'autorisation...",
    [DigitalBurnbagStrings.OAuth_Success]: 'Autorisation réussie',
    [DigitalBurnbagStrings.OAuth_Failed]: "Échec de l'autorisation",
    [DigitalBurnbagStrings.OAuth_Cancelled]: 'Autorisation annulée',

    // -- Connection Summary --
    [DigitalBurnbagStrings.Summary_Healthy]: 'Tous les fournisseurs sont sains',
    [DigitalBurnbagStrings.Summary_Degraded]:
      'Certains fournisseurs nécessitent une attention',
    [DigitalBurnbagStrings.Summary_Critical]:
      'Critique : fournisseurs en échec',
    [DigitalBurnbagStrings.Summary_None]: 'Aucun fournisseur connecté',
    [DigitalBurnbagStrings.Summary_ConnectedProviders]:
      '{count} fournisseurs connectés',
    [DigitalBurnbagStrings.Summary_NeedsAttention]:
      '{count} nécessitent une attention',
    [DigitalBurnbagStrings.Summary_LastHeartbeat]:
      'Dernier battement de cœur : {time}',

    // -- Provider Dashboard --
    [DigitalBurnbagStrings.Nav_Providers]: 'Fournisseurs',
    [DigitalBurnbagStrings.Dashboard_Title]: 'Tableau de bord des fournisseurs',
    [DigitalBurnbagStrings.Dashboard_HealthBanner]: 'Résumé de santé',
    [DigitalBurnbagStrings.Dashboard_SignalPresence]: 'Présence',
    [DigitalBurnbagStrings.Dashboard_SignalAbsence]: 'Absence',
    [DigitalBurnbagStrings.Dashboard_SignalDuress]: 'Contrainte',
    [DigitalBurnbagStrings.Dashboard_SignalCheckFailed]: 'Vérification échouée',
    [DigitalBurnbagStrings.Dashboard_SignalInconclusive]: 'Non concluant',
    [DigitalBurnbagStrings.Dashboard_TimeSinceActivity]: "Temps depuis la dernière activité",
    [DigitalBurnbagStrings.Detail_StatusHistory]: "Historique des statuts",
    [DigitalBurnbagStrings.Detail_ConnectionSettings]: 'Paramètres de connexion',
    [DigitalBurnbagStrings.Detail_FilterBySignal]: 'Filtrer par signal',
    [DigitalBurnbagStrings.Detail_AllSignals]: 'Tous les signaux',
    [DigitalBurnbagStrings.Detail_Timeline]: 'Chronologie',
    [DigitalBurnbagStrings.Detail_NoHistory]: "Aucun historique de statut disponible",
    [DigitalBurnbagStrings.Binding_BindToProvider]: 'Lier au fournisseur',
    [DigitalBurnbagStrings.Binding_SelectProvider]: 'Sélectionner un fournisseur',
    [DigitalBurnbagStrings.Binding_Condition]: 'Condition',
    [DigitalBurnbagStrings.Binding_Action]: 'Action',
    [DigitalBurnbagStrings.Binding_Targets]: 'Cibles',
    [DigitalBurnbagStrings.Binding_Create]: 'Créer la liaison',
    [DigitalBurnbagStrings.Binding_ProviderNotConnected]: "Ce fournisseur n'est pas connecté.",
    [DigitalBurnbagStrings.Binding_FixConnection]: 'Réparer la connexion',
    [DigitalBurnbagStrings.Binding_DragHint]: 'Glissez une carte fournisseur sur un coffre ou un fichier',
    [DigitalBurnbagStrings.CustomProvider_Title]: 'Fournisseur personnalisé',
    [DigitalBurnbagStrings.CustomProvider_ImportJson]: 'Importer JSON',
    [DigitalBurnbagStrings.CustomProvider_ExportJson]: 'Exporter JSON',
    [DigitalBurnbagStrings.CustomProvider_Name]: 'Nom du fournisseur',
    [DigitalBurnbagStrings.CustomProvider_Description]: 'Description',
    [DigitalBurnbagStrings.CustomProvider_BaseUrl]: 'URL de base',
    [DigitalBurnbagStrings.CustomProvider_Category]: 'Catégorie',
    [DigitalBurnbagStrings.CustomProvider_AuthType]: "Type d'authentification",
    [DigitalBurnbagStrings.CustomProvider_Endpoints]: 'Points de terminaison',
    [DigitalBurnbagStrings.CustomProvider_ResponseMapping]: 'Mappage de réponse',
    [DigitalBurnbagStrings.CustomProvider_Save]: 'Enregistrer le fournisseur',
    // -- Encryption & Access Indicators --
    [DigitalBurnbagStrings.Encryption_AES256]: 'AES-256',
    [DigitalBurnbagStrings.Encryption_Encrypted]: 'Chiffré',
    [DigitalBurnbagStrings.Encryption_EncryptedTooltip]: 'Ce fichier est chiffré avec AES-256-GCM. Seuls les détenteurs de clés autorisés peuvent le déchiffrer.',
    [DigitalBurnbagStrings.Encryption_KeyWrapped]: 'Clé enveloppée',
    [DigitalBurnbagStrings.Encryption_KeyWrappedTooltip]: 'Votre clé de déchiffrement est enveloppée sous votre paire de clés ECIES personnelle.',
    [DigitalBurnbagStrings.Encryption_ApprovalProtected]: 'Quorum',
    [DigitalBurnbagStrings.Encryption_ApprovalTooltip]: 'Ce fichier nécessite une approbation de quorum pour les opérations sensibles.',
    [DigitalBurnbagStrings.Access_OnlyYou]: 'Vous seul',
    [DigitalBurnbagStrings.Access_SharedWith]: 'Partagé avec',
    [DigitalBurnbagStrings.Access_SharedWithCount]: 'Partagé avec {count} personnes',
    [DigitalBurnbagStrings.Access_ViewAll]: 'Voir tous les accès',
    [DigitalBurnbagStrings.Vault_EncryptionLabel]: 'Chiffrement',
    [DigitalBurnbagStrings.Vault_AllEncrypted]: 'Tous les fichiers chiffrés',
    [DigitalBurnbagStrings.Vault_AllEncryptedDesc]: 'Chaque fichier dans ce coffre est chiffré avec AES-256-GCM.',
    [DigitalBurnbagStrings.FileBrowser_ColAccess]: 'Accès',
    [DigitalBurnbagStrings.FileBrowser_ColSecurity]: 'Sécurité',

    // -- Friends Sharing --
    [DigitalBurnbagStrings.Friends_SectionTitle]: 'Amis',
    [DigitalBurnbagStrings.Friends_ShareWithAll]: 'Partager avec les amis',
  };
