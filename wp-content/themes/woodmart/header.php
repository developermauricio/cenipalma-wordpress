<?php
/**
 * The Header template for our theme
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
	<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-MR542LZ7PK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MR542LZ7PK');
</script>
</head>

<body <?php body_class(); ?>>
	<?php if ( function_exists( 'wp_body_open' ) ) : ?>
		<?php wp_body_open(); ?>
	<?php endif; ?>

	<?php do_action( 'woodmart_after_body_open' ); ?>

	<div class="website-wrapper">
		<?php if ( woodmart_needs_header() ) : ?>
			<?php if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'header' ) ) : ?>
				<header <?php woodmart_get_header_classes(); // phpcs:ignore ?>>
					<?php whb_generate_header(); ?>
				</header>
			<?php endif ?>

			<?php woodmart_page_top_part(); ?>
		<?php endif ?>
