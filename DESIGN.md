# Design system

The palette comes from the site logo: a yellow, coral red, green and sky-blue heart with a black outline.

## Color

| Token | Hex | Use |
| --- | --- | --- |
| `--sun` | #F8D830 | Logo yellow. Timeline line, highlights |
| `--coral` | #F25656 | Logo red. Decorative only |
| `--leaf` | #5ACF73 | Logo green. Decorative accents, pull-quote rule |
| `--sky` | #2ACFEE | Logo blue. Decorative only |
| `--coral-strong` | #C43D3D | Buttons, links, eyebrow labels (white text passes AA) |
| `--leaf-strong` | #2F8F4E | Success or positive text |
| `--sky-strong` | #137C99 | Secondary text accents |
| `--ink` | #1E1E1E | Body and headings (logo outline black) |
| `--ink-soft` | #5A5A5A | Secondary text |
| `--cream` | #FAF8F3 | Page background |
| `--paper` | #FFFFFF | Cards and alternate sections |
| `--line` | #E6E1D8 | Borders and dividers |

Tints (`--sun-tint`, `--coral-tint`, `--leaf-tint`, `--sky-tint`) are for tags and soft backgrounds.

Use the bright logo colors for shapes and accents only. For text or buttons, use the `-strong` shade so contrast stays readable.

## Type

- Headings: Fraunces (serif)
- Body: DM Sans
- Handwritten accents: Caveat

## Components

- Header: logo on the left, two dropdown menus (Career Projects, Personal Projects), Blog and My Journey links. Opening one menu closes the other.
- Cards: white, 1px line border, 18px radius, soft shadow.
- Buttons: pill shape, coral-strong fill, white text.

Tokens are defined at the top of `css/style.css`.
