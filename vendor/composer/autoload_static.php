<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitcdf25deae5d23a193121b624b8bbd0f7
{
    public static $prefixLengthsPsr4 = array (
        'R' => 
        array (
            'ReCaptcha\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'ReCaptcha\\' => 
        array (
            0 => __DIR__ . '/..' . '/google/recaptcha/src/ReCaptcha',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitcdf25deae5d23a193121b624b8bbd0f7::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitcdf25deae5d23a193121b624b8bbd0f7::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitcdf25deae5d23a193121b624b8bbd0f7::$classMap;

        }, null, ClassLoader::class);
    }
}