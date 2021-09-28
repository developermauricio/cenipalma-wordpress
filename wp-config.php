<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cenipalma' );

/** MySQL database username */
define( 'DB_USER', 'forge' );

/** MySQL database password */
define( 'DB_PASSWORD', 'WWYrY4oqGAI1whdjAilW' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'SZP3LDYMzT9~puEaGTGtdL`0c(}stXDqm?$.]t1@S P-juYjXx7->RvHj 5v L6h' );
define( 'SECURE_AUTH_KEY',  'PdzI{sp0g-g2ySB/}#Np(-Jo{c6^N| lnLi:6!;o<2=aa$P~)PL.&L3hE`fg={`r' );
define( 'LOGGED_IN_KEY',    '*nv!W8HC?*0D^H.Yy:W?1]Y04?.<L4*>cuVCS^5Q(3jUm4WXDk3]IwLH.-If*:O_' );
define( 'NONCE_KEY',        'X;: v.8J9V|i*|DIL*vj/ /LD=&i)Z16CxqaR@4,j)[:0jpYkIE,%`U)IwE9+LJ8' );
define( 'AUTH_SALT',        'NmKH>WFHU1-W?LM?%*efMBil#e32V;g/<2Bd tixm/EXMf5Q*TV3S)k%*Qd=p&4F' );
define( 'SECURE_AUTH_SALT', '!=T/}[QA/1E~GUfK_!F(oA$__!%c>KA*fb#n[QRh.h--0~tXLlb)w!)!ApUysCBk' );
define( 'LOGGED_IN_SALT',   '2z$?la*2Qx}5+9OoGy.E/_s}jP }<.NdH0gG2n6[ fzHx!W;KG^@Mhq3Nla=P{`F' );
define( 'NONCE_SALT',       '18E@hk}8(@m}m+G8JF8{<34|m8;5FHf6{~V15*ZU=#Uri~Qn,vN>VY^{c2;(JxmZ' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'cpal_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
